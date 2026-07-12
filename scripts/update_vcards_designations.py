import os
import re
import json
import zipfile
import xml.etree.ElementTree as ET

# Configuration
XLSX_PATH = 'employees_Designation.xlsx'
VCARDS_DIR = 'public/vcards-2026'

def parse_xlsx_sheet2(file_path):
    ns = {'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    with zipfile.ZipFile(file_path, 'r') as z:
        shared_strings = []
        if 'xl/sharedStrings.xml' in z.namelist():
            sst_xml = z.read('xl/sharedStrings.xml')
            sst_root = ET.fromstring(sst_xml)
            for si in sst_root.findall('.//main:si', ns):
                t_elements = si.findall('.//main:t', ns)
                if t_elements:
                    text = "".join([t.text for t in t_elements if t.text is not None])
                    shared_strings.append(text)
                else:
                    shared_strings.append("")
        
        sheet_xml = z.read('xl/worksheets/sheet2.xml')
        sheet_root = ET.fromstring(sheet_xml)
        
        rows = []
        sheet_data = sheet_root.find('main:sheetData', ns)
        if sheet_data is not None:
            for row_el in sheet_data.findall('main:row', ns):
                row_idx = int(row_el.get('r', '0'))
                row_data = {}
                for c_el in row_el.findall('main:c', ns):
                    cell_ref = c_el.get('r', '')
                    col_letter = "".join([char for char in cell_ref if char.isalpha()])
                    t = c_el.get('t', '')
                    v_el = c_el.find('main:v', ns)
                    
                    val = None
                    if v_el is not None:
                        val_str = v_el.text
                        if t == 's':
                            idx = int(val_str)
                            val = shared_strings[idx] if idx < len(shared_strings) else ""
                        elif t == 'b':
                            val = val_str == '1'
                        else:
                            try:
                                if '.' in val_str:
                                    val = float(val_str)
                                else:
                                    val = int(val_str)
                            except ValueError:
                                val = val_str
                    row_data[col_letter] = val
                rows.append((row_idx, row_data))
        
        rows.sort(key=lambda x: x[0])
        if not rows:
            return []
            
        header_row = rows[0][1]
        headers = {col: str(val).strip() for col, val in header_row.items() if val is not None}
        
        data_rows = []
        for r_idx, row_data in rows[1:]:
            row_dict = {}
            for col, val in row_data.items():
                if col in headers:
                    row_dict[headers[col]] = val
            if any(row_dict.values()):
                data_rows.append(row_dict)
        return data_rows

def normalize_name(name):
    if not name:
        return ""
    name = re.sub(r'^(mr|ms|dr|mrs|miss|s)\.?\s+', '', name, flags=re.IGNORECASE)
    name = re.sub(r'[^a-z0-9\s]', '', name.lower())
    return " ".join(name.split())

def clean_words(name):
    norm = normalize_name(name)
    words = norm.split()
    return [w for w in words if len(w) > 2]

def parse_html_vcard(index_path):
    with open(index_path, 'r', encoding='utf-8', newline='') as f:
        html = f.read()
    
    # Extract Name from h1
    h1_match = re.search(r'<h1>(.*?)</h1>', html, re.DOTALL)
    name = h1_match.group(1).strip() if h1_match else ""
    
    # Extract Current Designation
    designation = ""
    if h1_match:
        idx = html.find(h1_match.group(0))
        window = html[idx:idx+1000]
        # find the first <p>...</p> after <h1> but ignore class="contacc"
        p_matches = re.findall(r'<p([^>]*)>(.*?)</p>', window, re.DOTALL)
        for attrs, p_content in p_matches:
            if 'contacc' not in attrs:
                designation = p_content.strip()
                break
    
    # Extract email from contact object or mailto
    email_match = re.search(r'email:\s*["\']([^"\']+)["\']', html)
    email = email_match.group(1).strip() if email_match else ""
    if not email:
        mailto_match = re.search(r'mailto:([^"\'>\s]+)', html)
        email = mailto_match.group(1).strip() if mailto_match else ""
        
    return {
        "name": name,
        "email": email,
        "current_designation": designation,
        "html_content": html
    }

def first_names_compatible(name1, name2):
    norm1 = normalize_name(name1)
    norm2 = normalize_name(name2)
    w1 = norm1.split()
    w2 = norm2.split()
    if not w1 or not w2:
        return False
    fn1, fn2 = w1[0], w2[0]
    if len(fn1) == 1 or len(fn2) == 1:
        return fn1[0] == fn2[0]
    return fn1 == fn2


def find_match(vcard, employees):
    v_norm = normalize_name(vcard['name'])
    v_words = set(clean_words(vcard['name']))
    v_email = vcard['email'].lower().strip()
    v_email_user = v_email.split('@')[0] if '@' in v_email else v_email
    
    # 1. First check exact name match
    for emp in employees:
        emp_norm = normalize_name(emp.get("Full Name", ""))
        if v_norm == emp_norm and v_norm:
            return emp, "Exact Name Match"
            
    # 2. Check exact email username match, but only if the name has some overlap
    # This prevents matching Anuprita to Ramprasad (since they share the same aos.01 email).
    if v_email_user:
        for emp in employees:
            emp_email = (emp.get("Company Email") or "").lower().strip()
            emp_email_user = emp_email.split('@')[0] if '@' in emp_email else emp_email
            if v_email_user == emp_email_user:
                # Require at least one word from the vcard name to be present in the employee name
                emp_words = set(clean_words(emp.get("Full Name", "")))
                if v_words.intersection(emp_words) and first_names_compatible(vcard['name'], emp.get("Full Name", "")):
                    return emp, "Email & Name Overlap Match"
                    
    # 3. Check Jaccard word similarity on name (score >= 0.5)
    best_match = None
    best_score = 0
    for emp in employees:
        if not first_names_compatible(vcard['name'], emp.get("Full Name", "")):
            continue
        emp_words = set(clean_words(emp.get("Full Name", "")))
        common = v_words.intersection(emp_words)
        if len(common) >= 2:
            score = len(common) / max(len(v_words), len(emp_words))
            if score > best_score:
                best_score = score
                best_match = emp
    if best_match and best_score >= 0.5:
        return best_match, f"Name Word Similarity Match ({best_score:.2f})"
        
    return None, None


def update_vcard_html(index_path, vcard, new_designation):
    html = vcard['html_content']
    
    # We want to replace the designation <p> tag inside the profile-name section.
    # Let's locate the <h1>Name</h1> section
    h1_pattern = r'(<h1>' + re.escape(vcard['name']) + r'</h1>\s*<p[^>]*>)(.*?)(</p>)'
    
    # Let's check if we can find this pattern
    match = re.search(h1_pattern, html, re.DOTALL)
    if not match:
        # Try generic h1 pattern
        h1_pattern = r'(<h1>[^<]+</h1>\s*<p[^>]*>)(.*?)(</p>)'
        match = re.search(h1_pattern, html, re.DOTALL)
        
    if match:
        old_desig_block = match.group(2)
        # Verify it doesn't contain contact details (contacc)
        if 'contacc' not in match.group(1):
            new_block = match.group(1) + new_designation + match.group(3)
            updated_html = html.replace(match.group(0), new_block)
            
            # Write back
            with open(index_path, 'w', encoding='utf-8', newline='') as f:
                f.write(updated_html)
            return True
            
    print(f"  [ERROR] Could not locate designation tag in HTML for {vcard['name']}")
    return False

def main():
    print("--- Starting VCard Designation Updater ---")
    employees = parse_xlsx_sheet2(XLSX_PATH)
    print(f"Loaded {len(employees)} employees from {XLSX_PATH}")
    
    slugs = sorted([f for f in os.listdir(VCARDS_DIR) if os.path.isdir(os.path.join(VCARDS_DIR, f)) and f != '_shared'])
    print(f"Found {len(slugs)} vcard folders")
    
    matched_count = 0
    updated_count = 0
    
    for slug in slugs:
        index_path = os.path.join(VCARDS_DIR, slug, 'index.html')
        if not os.path.exists(index_path):
            continue
            
        vcard = parse_html_vcard(index_path)
        emp, match_type = find_match(vcard, employees)
        
        if emp:
            matched_count += 1
            new_designation = emp.get("Designation", "").strip()
            old_designation = vcard['current_designation'].strip()
            
            if new_designation != old_designation:
                print(f"Match: [{slug}] -> {emp['Full Name']} ({match_type})")
                print(f"  Updating designation: '{old_designation}' -> '{new_designation}'")
                success = update_vcard_html(index_path, vcard, new_designation)
                if success:
                    updated_count += 1
            else:
                # Designation already matches, no action needed
                pass
        else:
            # No match found, skip
            pass
            
    print("\n--- Summary ---")
    print(f"Total matched folders: {matched_count} / {len(slugs)}")
    print(f"Total updated folders: {updated_count}")

if __name__ == '__main__':
    main()

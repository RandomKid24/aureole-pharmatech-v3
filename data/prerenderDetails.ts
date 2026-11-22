// Plain-text facts shown in the prerendered HTML of pages whose real content only exists after React loads.
// Source: BUSINESS_FACTS.md (every line is a verified fact there; do not add anything that is not).
export interface DetailBlock { h: string; p?: string[]; ul?: string[] }

const OFFICES: DetailBlock = {
  h: "Offices and plant",
  ul: [
    "Nashik corporate office: Office No. 6004, Satyanarayan Mall, Near City Centre Mall, Lawate Nagar, Nashik 422002, Maharashtra",
    "Thane head office: Unit No. 103, 1st Floor, Centura Square, Wagale Industrial Estate, Thane",
    "Manufacturing plant: Plot No. B-61, Malegaon MIDC, Tal. Sinnar, Dist. Nashik 422113, Maharashtra",
    "Phone +91 86005 22240; email enquiry@aureolepharmatech.com",
  ],
};

export const PAGE_DETAILS: Record<string, DetailBlock[]> = {
  "/about": [
    { h: "Who we are", p: ["Aureole Pharma Tech (legal name Aureole Pharma Private Limited) is a Nashik-based manufacturer of pharmaceutical and laboratory equipment: stability chambers, walk-in chambers, ovens, freezers, table-top instruments, cleanroom equipment and modular laboratory furniture, with monitoring software and service support."] },
    { h: "Leadership", p: ["Managing Director: Dr. Kiran Badgujar."] },
    { h: "Credentials", ul: ["ISO 9001:2015 certified (scope: manufacturing of pharma industry lab equipment)", "CE certificate", "ZED Gold (MSME Sustainable ZED scheme)"] },
    { h: "Reach (figures as stated on this website)", ul: ["70+ verified client entities", "15+ countries covered", "1,500+ equipment installations"] },
    OFFICES,
  ],
  "/about/certification-compliance": [
    { h: "ISO 9001:2015", p: ["Quality management certificate, assessed by QRO. Scope: manufacturing of pharma industry lab equipment. Certified 19 January 2024."] },
    { h: "CE certificate", p: ["Certificate of Compliance issued by Geotek Global Certification Pvt. Ltd. (which states it is a non-notified body), valid 12 January 2024 to 11 January 2029."], ul: ["Humidity Chamber and Walk in Humidity Chamber", "BOD Incubator and Walk in BOD Incubator", "Cold Chamber and Walk in Cold Chamber", "Deep Freezer and Walk in Deep Freezer", "Photostability Chamber, Water Bath, Muffle Furnace, Bacteriological Incubator, Hot Air Oven, Vacuum Oven"] },
    { h: "ZED Gold", p: ["Awarded to Aureole Pharma Private Limited under the MSME Sustainable ZED scheme, assessed by Equalitas Systemcert Private Limited. Issued 19 March 2026, valid for three years."] },
    { h: "Quality policy", p: ["Signed by Managing Director Dr. Kiran Badgujar, issued 5 October 2023."] },
  ],
  "/about/plants": [
    { h: "Manufacturing", p: ["Stand-alone chambers, walk-in chambers and table-top instruments are manufactured at our plant in Malegaon MIDC, Sinnar, Nashik, Maharashtra."] },
    OFFICES,
  ],
  "/service": [
    { h: "What our service team covers", ul: [
      "Product consultation, including sizing and capacity guidance",
      "Installation support: on-site set up, calibration and commissioning of walk-in and stand-alone chambers",
      "AMC and CAMC maintenance and technical support",
      "Temperature and humidity calibration (NABL-traceable) and multi-point calibration with certification",
      "IQ, OQ and PQ execution, thermal mapping, and re-validation after repair, relocation or upgrade",
      "Software and data-integrity support, system upgradation, relocation and documentation",
      "Troubleshooting and warranty support",
    ] },
    { h: "Contact", p: ["service.support@aureolepharmatech.com or +91 86005 22240."] },
  ],
  "/software": [
    { h: "Monitoring software features", ul: [
      "Secure access controls, electronic signatures and audit trails (features that support 21 CFR Part 11 requirements)",
      "Automated SMS and email alerts for temperature or humidity deviations",
      "Multi-chamber configuration",
      "SCADA integration for centralised monitoring and data logging",
    ], p: ["Whether an installation meets 21 CFR Part 11 also depends on how the customer validates and operates it."] },
  ],
  "/careers": [
    { h: "Working with us", p: ["Current openings are listed on this page. Applications can be sent to careers@aureolepharmatech.com."] },
  ],
};

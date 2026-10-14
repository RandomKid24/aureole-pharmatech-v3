# BUSINESS_FACTS.md: Aureole Pharma Tech fact register

One place for the facts the website, schema, `public/content.md` and `public/llms.txt` rely on, each with its **source**. If a fact is not here or is marked *unverified*, do not publish it as fact. When the UI/product data and this file disagree, **the UI/product data wins** (then update this file).

_Snapshot date: 2026-10-14. Product tables in section 7 are generated from `data/products/`; regenerate when specs change._

## 1. Verification rules
- **Verified** = taken from the website UI/data files, or from the certificate PDFs in `public/compliance/`.
- **Unverified** = needs the owner's confirmation; never state it on the site.
- Never invent specs, prices, ratings, clients, awards or certification scope.
- 21 CFR Part 11 wording: "supports Part 11 requirements" (features), never "compliant".

## 2. Identity
| Fact | Value | Source |
| :--- | :--- | :--- |
| Brand / trade name | Aureole Pharma Tech | site UI |
| Legal name | Aureole Pharma Pvt. Ltd. (ZED certificate: "Aureole Pharma Private Limited") | `public/compliance/*.pdf` |
| Website | https://www.aureolepharmatech.com (www is canonical) | `vercel.json`, `data/pageSeo.ts` |
| Industry | Manufacturer of pharmaceutical / laboratory equipment (stability chambers, walk-in chambers, ovens, freezers, table-top instruments, cleanroom equipment, lab furniture) | site UI; ISO scope "Manufacturing of pharma industry lab equipment" |
| Managing Director | Dr. Kiran Badgujar (LinkedIn: in.linkedin.com/in/dr-kiran-badgujar-385a3367) | Quality Policy PDF, About page |
| Social profiles | LinkedIn company page `aureole-pharmatech`; Instagram `aureole_pharmatech` | `components/Footer.tsx` |

## 3. Contact and locations (as used on the website)
| Fact | Value | Source |
| :--- | :--- | :--- |
| Phone | +91 86005 22240 | `components/Footer.tsx`, forms (owner confirmed this is the number in use) |
| Email | enquiry@aureolepharmatech.com | Footer, forms |
| Other mailboxes | service.support@ (Service page), careers@ (Careers page) | page components |
| Nashik corporate office | Office No. 6004, Satyanarayan Mall, Near City Centre Mall, Lawate Nagar, Nashik 422002, Maharashtra | Footer, site schema |
| Thane head office | Unit No. 103, 1st Floor, Centura Square, Wagale Industrial Estate, Thane | Footer |
| Manufacturing plant (per certificates) | Plot No. B-61, Malegaon MIDC, Tal. Sinnar, Dist. Nashik 422113 (ZED certificate lists Plot B-80) | CE/ISO/ZED/Quality Policy PDFs |
| Coordinates, opening hours | **Unverified (not provided)** | none |

## 4. Statistics shown on the site (taken from UI; not independently checked)
| Claim | Where it appears |
| :--- | :--- |
| 28+ years of precision engineering (company) | Home About + FAQ. The 27 years on the About page is the Managing Director's first-person quote. |
| 1,500+ successful installations | Home About, Home FAQ |
| 15+ states covered | Home About, Home FAQ |
| 70+ verified client entities | Home About (`data/clients.ts` lists 72 logos) |

## 5. Certificates (from the PDFs in `public/compliance/`)
| Certificate | Key details | Valid / dates |
| :--- | :--- | :--- |
| CE (Certificate of Compliance) | Issuer: Geotek Global Certification Pvt. Ltd. (states it is a non-notified body). Directive 2007/47/EC as amended by Regulation (EU) 2017/745. No. 23GGCSIN 300393. Products covered: Humidity Chamber, Walk in Humidity Chamber, Walk in BOD Incubator, BOD Incubator, Walk in Cold Chamber, Cold Chamber, Deep Freezer, Walk in Deep Freezer, Water Bath, Muffle Furnace, Bacteriological Incubator, Hot Air Oven, Vacuum Oven, Photostability Chamber | 12 Jan 2024 to 11 Jan 2029 |
| ISO 9001:2015 | Assessed by QRO. Scope: manufacturing of pharma industry lab equipment. No. 305024011910Q | Certified 19 Jan 2024; expiry 18 Jan 2027; surveillance audits due 18 Jan 2025 and 18 Jan 2026 (status of audits **unverified**) |
| ZED Gold (MSME Sustainable ZED scheme) | Awarded to Aureole Pharma Private Limited; assessment agency Equalitas Systemcert Private Limited; NIC 28 | Issued 19 Mar 2026; valid three years |
| Quality Policy | Signed by Dr. Kiran Badgujar, Managing Director | Issued 5 Oct 2023 |

## 6. Services and software (from UI)
- **Services** (`pages/Service/sections/CoreServices.tsx`): AMC / CAMC maintenance and technical support; temperature and humidity calibration (NABL-traceable) and multi-point calibration with certification; IQ, OQ and PQ execution; thermal mapping; re-validation after repair, relocation or upgrade; software and data-integrity support; system upgradation; relocation, documentation and regulatory support.
- **Monitoring software** (`pages/Software`): secure access controls, electronic signatures, audit trails (21 CFR Part 11 features); SMS and email alerts; multi-chamber configuration; SCADA integration (Home page).
- **Part 11 add-on**: listed as an add-on ("21 CFR Part 11 Support") on chamber product pages.
- **Unverified / needed from owner**: software name and version, validation documents, per-requirement Part 11 mapping, data-retention policy, whether IQ/OQ/PQ papers are supplied for the software.

## 7. Products (generated from `data/products/`)
Live = listed in `data/products/catalog.ts`. Removed products still have data and a page but are `noindex` and not in the sitemap (see `PRODUCT_LIST_STATUS.md`).

### Live products (listed in catalog.ts)

#### Humidity Chamber
Humidity chambers play a crucial role in a wide array of industries, including electronics, military and defense, pharmaceuticals, transportation, medical devices, shipping, and communications, among others. These chambers are versatile tools that enable companies to conduct various types of testing to ensure the quality and reliability of their products.

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 20°C to 60°C |
| Humidity Range | 40% to 95% RH |
| Accuracy | ± 0.3°C / ± 2.0% RH |
| Uniformity | ± 1.0°C / ± 3.0% RH |
| Test Suitable for | 25°C & 60% RH, 30°C & 65% RH, 40°C & 75% RH, 30°C & 75% RH |
| Also available with low conditions | 25°C & 40% RH, 40°C & 25% RH, 30°C & 35% RH |

Options/add-ons: 21 CFR Part 11 Support; Standby Refrigeration & Steam Generation System; Scanner : 4 pt. temperature & humidity sensor; Mobile Alert System; Hooter System; Door Access System (Numeric/Biometric); Extra Trays

#### BOD Incubator
BOD Incubator, which stands for Bio-Oxygen Demand Incubator, serves the critical function of maintaining precise temperature control for various applications such as tissue culture growth tests, storage of bacterial cultures, and incubation processes that demand a high degree of temperature accuracy.

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 10°C to 60°C |
| Accuracy | ± 0.5°C |
| Uniformity | ± 2.5°C |
| Power Supply | Single Phase, 230V 50Hz |

Options/add-ons: 21 CFR Part 11 Support; Standby Refrigeration System (for BOD Only); Scanner : 4 pt. temperature sensor; Mobile Alert System; Hooter System; Door Access System (Numeric/Biometric); Extra Trays

#### Cold Chamber
Aureole Pharma Tech Cold Chambers are purpose-built for conducting tests, treatments, and storage of products and materials that require precise climate control. These cold chambers serve a multitude of applications across various industries, including Pharmaceutical, Chemical, Automobile, Biotechnology, Telecommunication, Electronics, Defense, Medical Equipment, Universities, Military, and Consum

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 2°C to 8°C |
| Accuracy | ± 1°C |
| Uniformity | ± 2°C |
| Power Supply | Single Phase, 230V 50Hz |

Options/add-ons: 21 CFR Part 11 Support; Standby Refrigeration System; Scanner : 4 pt. temperature sensor; Mobile Alert System; Hooter System; Door Access System (Numeric/Biometric); Extra Trays

#### Deep Freezer (upto -20°C / upto -40°C)
Deep Freezer (upto -20° C)

| Parameter | Value |
| :--- | :--- |
| Temperature Range | -5°C to -20°C / -25°C to -40°C |
| Accuracy | ± 3°C |
| Uniformity | ± 5°C |

Options/add-ons: 21 CFR Part 11 Support; Mobile Alert System; Hooter System; Extra Trays

#### Ultra Low Deep Freezer (-80°C)
Ultra Low Deep Freezer( Upto -80°C)

| Parameter | Value |
| :--- | :--- |
| Temperature Range | Up to -80°C |
| Accuracy | ± 0.5°C |
| Uniformity | ± 10°C |

Options/add-ons: 21 CFR Part 11 Support; Mobile Alert System; Hooter System; Extra Trays

#### Photostability Chamber
Aureole Pharma Tech Photostability Chambers are meticulously designed in strict accordance with the ICH Q1B guidelines, recognizing the pivotal role that light testing plays in stress testing protocols. These chambers offer precise control and monitoring of temperature, with the option for humidity regulation, and most importantly, they closely track light intensity exposure on both the drug and d

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 20°C to 50°C |
| Accuracy | ± 0.5°C |
| Uniformity | ± 2.0°C |

Options/add-ons: 21 CFR Part 11 Support; UV Meter; LUX Meter; Mobile Alert System; Hooter System; Door Access System (Numeric/Biometric); Extra Trays

#### Pharma Refrigerator / Dual Zone Chamber
Pharmaceutical refrigerators hold a pivotal position in upholding the safety and potency of medications and vaccines. Inadequate storage conditions can result in product deterioration, diminished effectiveness, and potential harm to patients. As such, pharma refrigerators assume a critical role within the healthcare and pharmaceutical sectors, guaranteeing the stability and safety of temperature-s

| Parameter | Value |
| :--- | :--- |
| Upper Zone (DF): Temp Range | -5°C to -20°C |
| Upper Zone (DF): Accuracy | ± 3°C |
| Upper Zone (DF): Uniformity | ± 5°C |
| Lower Zone (CC): Temp Range | 2°C to 8°C |
| Lower Zone (CC): Accuracy | ± 1°C |
| Lower Zone (CC): Uniformity | ± 2°C |

Options/add-ons: 21 CFR Part 11 Support; Mobile Alert System; Hooter System; Extra Trays; Scanner : 4 pt. temperature sensor; Door Access System (Numeric/Biometric)

#### Hot Air Oven
Aureole Pharma Tech hot air oven offers a controlled heating environment that is ideal for processes such as curing, drying, and conducting high-temperature tests. It delivers exceptional accuracy and superior quality in maintaining the required temperature conditions for these applications.

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 10°C above ambient to 250°C |
| Accuracy | ± 1°C |
| Uniformity | ± 5°C |

Options/add-ons: Hooter System; Extra tray

#### Vacuum Oven
Vacuum ovens are the perfect selection when rapid drying is needed without jeopardizing the integrity of the samples. These ovens feature a sturdy design, complete with a reinforced glass viewing window and a shatter-resistant safety screen. The interior is constructed from corrosion-resistant stainless steel, ensuring not only durability but also ease of maintenance.

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 60°C to 200°C |
| Accuracy | ± 1°C |
| Uniformity | ± 5°C |
| Vacuum | 760 mm of mercury (-30) |

Options/add-ons: Hooter System; Vacuum Pump; Printing facility; Extra tray

#### Muffle Furnance
Aureole Pharma Tech Muffle Furnance is designed for high-temperature applications, providing a controlled environment for processes requiring precise heat treatment up to 1150°C.

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 1150 °C |
| Accuracy | ± 5°C |

#### Walk In Humidity Chamber
Aureole Pharma Tech's walk-in humidity chambers are meticulously crafted with the purpose of creating controlled environments for studying and assessing the impacts of different environmental factors such as humidity and temperature. These test chambers find applications in a wide range of fields, including microbiology, plant studies, tissue research, electronic component testing, and various cus

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 20°C to 60°C |
| Humidity Range | 40%RH to 95% RH |
| Accuracy | ± 0.3°C / ± 2.0% RH |
| Uniformity | ± 1.0°C / ± 3.0% RH |
| Test Suitable for | 25°C & 60% RH, 30°C & 65% RH, 40°C & 75% RH, 30°C & 75% RH |
| Also available with low conditions | 25°C & 40% RH, 40°C & 25% RH, 30°C & 35% RH |

Options/add-ons: 21 CFR Part 11 Support; Mobile Alert System; Hooter System; Door Access System (Biometric); Extra Trays

#### Walk In Cold Chamber
Aureole Pharma Tech’s Walk-in Cold chambers are purpose-built for the meticulous temperature control required in cold storage of biological samples, serving various industries including biotechnology, food processing, pharmaceuticals, and agrochemical manufacturing. These units are constructed using Polyurethane Foam (PUF) panels and are manufactured in accordance with Good Manufacturing Practices

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 2°C to 8°C |
| Accuracy | ± 1°C |
| Uniformity | ± 2°C |

Options/add-ons: 21 CFR Part 11 Support; Mobile Alert System; Hooter System; Door Access System (Biometric); Extra Trays

#### Walk In BOD Incubator
Aureole Pharma Tech’s premium walk-in Incubators stand out as the preferred choice for maintaining precise and uniform temperature conditions within the chamber. These incubators are renowned for their exceptional accuracy, making them the top choice for applications that demand stringent temperature control.

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 10°C to 60°C |
| Accuracy | ± 0.5°C |
| Uniformity | ± 2.5°C |

Options/add-ons: 21 CFR Part 11 Support; Mobile Alert System; Hooter System; Door Access System (Biometric); Extra Trays

#### Walk In Deep Freezer
Aureole Pharma Tech Walk-in Deep Freezers offer an optimal solution for storing drug products at sub-zero temperatures, providing a wide temperature range from -5°C to -20°C / -25°C to -40°C. These deep freezers are designed with several advanced features to enhance reliability and sample protection:

| Parameter | Value |
| :--- | :--- |
| Temperature Range | -5°C to -20°C / -25°C to -40°C |
| Accuracy | ± 3°C |
| Uniformity | ± 5°C |

Options/add-ons: 21 CFR Part 11 Support; Mobile Alert System; Hooter System; Door Access System (Biometric); Extra Trays

#### Ultrasonic Bath
Aureole Pharma Tech Ultrasonic Baths are designed to cover a wide spectrum of laboratory and industrial cleaning and processing applications. While all models share the same core ultrasonic technology and build quality, individual series differ in capacity, control level, temperature handling, and functional enhancements.

| Parameter | Value |
| :--- | :--- |
| MOC | SS 304 (Tank & Body) |
| Transducers | Imported PZT (Weld-Bond) |
| Generator | MOSFET / IGBT SMPS |
| Control | Digital Timer w/ Degas |
| Cleaning | Uniform Cavitation tech |
| Standard Acc. | Lid, Basket & Drain Valve |

#### Water Bath
Aureole Pharma Tech Water Baths are precision-engineered heating cabinets designed for incubation and temperature-sensitive applications where samples cannot be kept in direct dry heat. Available in both Still (Constant) and Circulating variants, these units provide exceptional temperature uniformity and stability across laboratory and industrial workflows.

| Parameter | Value |
| :--- | :--- |
| MOC | SS 304 Mirror / Powder Coated |
| Control | Digital PID / 0.1°C Res. |
| Safety | Low Water & Overshoot Cut-off |
| Heating | High Quality Immersion Heater |
| Lid | SS Gabled / Concentric Lid |
| Uniformity | ± 0.3°C to ± 0.5°C |

#### Steam Bath
A Steam bath is a advance version in water bath. It is designed such a way to reach and maintain 100 degree temperature. Steam bath is useful in many industries and laboratories. This machine is essential in Microbiology & Production Departments for substance testings the specimen is a heated water. The samples are kept inside them to test their behaviour in rising temperature.

#### Oil Bath
An oil bath, commonly used in chemistry laboratories, involves immersing reason vessels or samples in heated oil to maintain stable and controlled temperatures, crucial for sensitive experiments and reasons. Moreover it has unique design to achieve up to 250 C.

#### Dry Bath
Digital Dry Bath Incubator is designed for maintaining constant temperature of samples in test tubes inserted in the aluminium block sockets. It is widely used for pathology laboratory, IVF Center, Pharmaceutical laboratory, Food & Dairy industries, PCR – analysis extracon of DNA and RNA from cell cultures, etc.

#### Air Sampler
Aureole Pharma Tech Air Samplers provide high-performance microbial monitoring for critical environments. Built on a unified industrial-grade hardware platform, they are available in both Basic and 21 CFR Part 11 versions to meet diverse regulatory needs. Both models share the same high-precision sampling engine while offering different levels of data governance.

| Parameter | Value |
| :--- | :--- |
| Display | 4.3" TFT LCD (272 x 480) Touch |
| Flow Rate | 100 & 180 LPM |
| Weight | 2.7 kg |
| Communication | Wi-Fi Guided Transfer |
| Battery Life | 10 Hours Active Sampling (LiFePO4) |

#### Modular Laboratory Furniture
Aureole Pharma Tech’s modular laboratory furniture systems are engineered to create a safe, efficient, and ergonomic environment for modern scientific research. Our comprehensive range includes specialized workbenches, fume hoods, and storage solutions designed to meet the rigorous demands of pharmaceutical, chemical, and biological laboratories. Each component is crafted using high-performance ma

#### Stainless Steel Items & Accessories
High-quality stainless steel accessories and components for laboratory equipment including test tube racks, weight rings, exposing stands, swab plates, and lids & stands.


### Removed products (page exists, not listed, noindex)

#### Stability Chamber
Aureole Pharma Tech Stability Chambers are specifically designed for long-term stability studies of pharmaceutical products and substances. These chambers provide a high degree of temperature and humidity control accuracy, ensuring compliance with ICH guidelines for stability testing. They are characterized by their superior uniformity and reliability for continuous 24/7 operation.

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 20°C to 60°C |
| Humidity Range | 40% to 95% RH |
| Accuracy | ± 0.3°C / ± 2.0% RH |
| Uniformity | ± 1.0°C / ± 3.0% RH |

Options/add-ons: 21 CFR Part 11 Support; Standby Refrigeration & Steam Generation System; Scanner : 4 pt. temperature & humidity sensor; Mobile Alert System; Hooter System; Door Access System (Numeric/Biometric); Extra Trays

#### Cooling Incubator
Cooling Incubators (also known as BOD Incubators) are essential for applications requiring stable, low-temperature environments. They are widely used for BOD determination, cell culture, and storage of cultures where precise temperature control is critical.

| Parameter | Value |
| :--- | :--- |
| Temperature Range | 20°C to 60°C |
| Accuracy | ± 0.2°C |
| Uniformity | ± 1.0°C |
| Power Supply | Single Phase, 230V 50Hz |

Options/add-ons: 21 CFR Part 11 Support; Standby Refrigeration System (for BOD Only); Scanner : 4 pt. temperature sensor; Mobile Alert System; Hooter System; Door Access System (Numeric/Biometric); Extra Trays

#### Wall Side Bench
Heavy-duty wall-mounted laboratory benches designed for maximum stability and workspace efficiency.

#### Island Bench
Centrally located laboratory bench systems allowing access from all sides, ideal for collaborative environments and large-scale experiments.

#### Corner Bench
Heavy-duty wall-mounted laboratory benches designed for maximum stability and workspace efficiency.

#### Anti Vibration Table
Heavy-duty wall-mounted laboratory benches designed for maximum stability and workspace efficiency.

#### Fume Hood
High-performance aerodynamic fume hoods designed for safe containment of hazardous chemical vapors and protection of lab personnel.

#### Spot Extractor
High-performance aerodynamic fume hoods designed for safe containment of hazardous chemical vapors and protection of lab personnel.

#### Overhead Cabinet
A comprehensive range of storage cabinets designed for efficient organization and safe storage in laboratory environments. Our offerings include under-bench, wall-mounting, and file storage cabinets, along with essential components like carcasses, shelves, and fillers.

#### Tall Storage Cabinet
A comprehensive range of storage cabinets designed for efficient organization and safe storage in laboratory environments. Our offerings include under-bench, wall-mounting, and file storage cabinets, along with essential components like carcasses, shelves, and fillers.

#### Storage Cabinets
A comprehensive range of storage cabinets designed for efficient organization and safe storage in laboratory environments. Our offerings include under-bench, wall-mounting, and file storage cabinets, along with essential components like carcasses, shelves, and fillers.

#### Laboratory Sinks
A comprehensive range of essential laboratory accessories designed for functionality, safety, and organization.

#### Laboratory Fittings
Comprehensive range of laboratory fittings designed for functionality and safety in modern research environments.

#### Lab Accessories
A comprehensive range of essential laboratory accessories designed for functionality, safety, and organization.

#### Static Pass Box
Aureole Static Pass Boxes provide a secure and economical solution for transferring materials between classified and non-classified areas without compromising room integrity. Designed with mechanical interlocks and seamless SS construction, they eliminate cross-contamination risks while ensuring smooth operations.

| Parameter | Value |
| :--- | :--- |
| Standard Sizes | 500×500×500 mm, 450×450×450 mm |
| Material | SS304 / SS316 |
| Door Type | Dual doors with mechanical interlock |
| Mounting | Flush wall mounting |
| Sterilization | UV lamp with timer |
| Lighting | LED illumination |
| Compliance | WHO-GMP, ISO 7/8 |

Options/add-ons: Custom sizes available; SS316 upgrade; Digital timer for UV cycle; Pressure differential gauge; Validation documentation (DQ/IQ/OQ); Additional UV lamps

#### Dynamic Pass Box
Aureole Dynamic Pass Boxes create an ISO 5 (Class 100) micro-environment inside the chamber using HEPA-filtered laminar airflow, ensuring sterile transfers between high-grade cleanroom zones.

| Parameter | Value |
| :--- | :--- |
| Standard Sizes | 500×500×500 mm, 450×450×450 mm |
| Cleanliness Class | ISO 5 / Class 100 |
| Filtration | H13/H14 HEPA or ULPA |
| Airflow Type | Vertical laminar flow |
| Door Interlock | Electromagnetic |
| Control Panel | Digital display / touch screen |
| Pressure Monitoring | Magnehelic gauge |
| Compliance | WHO-GMP, ISO 5 |

Options/add-ons: ULPA filtration upgrade; Touch screen control panel; Data logging system; Remote monitoring capability; Validation documentation (DQ/IQ/OQ); Custom sizes available; 21 CFR Part 11 Support

#### Laminar Air Flow
Aureole Laminar Air Flow Units deliver unidirectional HEPA-filtered airflow across the work surface, creating a sterile environment for product handling, sampling, and assembly.

| Parameter | Value |
| :--- | :--- |
| Standard Sizes | 1220×610×610 mm, 910×610×610 mm |
| Cleanliness Class | ISO 5 / Class 100 |
| Filtration | HEPA H14 / ULPA |
| Airflow Velocity | 0.45 ± 20% m/s |
| Airflow Type | Horizontal or Vertical |
| Work Surface | 18/19 gauge SS304 |
| Lighting | Energy-efficient LED |
| Test Ports | DOP / PAO validation ports |

Options/add-ons: ULPA filtration upgrade; UV sterilization system; Digital airflow monitor; Magnehelic pressure gauge; Custom dimensions; Mobile stand with casters; Validation documentation (DQ/IQ/OQ); Data logging capability

#### Sampling / Dispensing Booth
Aureole Sampling & Dispensing Booths ensure dust containment and contamination control during powder sampling, weighing, and dispensing operations. Engineered with reverse laminar airflow, they protect both personnel and products.

| Parameter | Value |
| :--- | :--- |
| Standard Sizes | 1220×610×610 mm, 910×610×610 mm |
| Cleanliness Class | ISO 5 / ISO 7 |
| Airflow Type | HEPA-filtered downflow + containment |
| Work Surface | SS304 anti-static |
| Filtration | HEPA H13/H14 |
| Design | Ergonomic operator layout |
| Exhaust | Optional ducting integration |
| Compliance | GMP, WHO standards |

Options/add-ons: Exhaust ducting system; Digital airflow monitoring; Magnehelic pressure gauge; UV sterilization; Custom sizes available; Validation documentation (DQ/IQ/OQ); Data logging system; Remote monitoring capability

#### Biosafety Cabinet
Aureole Biosafety Cabinets provide advanced biological containment with HEPA-filtered inflow and downflow air, making them ideal for microbiology labs, MLT, and sterility testing environments.

| Parameter | Value |
| :--- | :--- |
| Standard Sizes | 1220×610×610 mm, 910×610×610 mm |
| Class Type | Class II A2 / B2 |
| Filtration Efficiency | 99.995% HEPA |
| Protection | Personnel, Product, Environment |
| Interior Material | SS304 seamless |
| Sash | Tempered glass with ergonomic access |
| Monitoring | Digital airflow with alarms |
| Compliance | NSF/EN standards |

Options/add-ons: Programmable UV timer; Data logging system; Remote monitoring; Custom sizes available; Validation documentation (DQ/IQ/OQ); Service port for equipment; Gas/vacuum connections; 21 CFR Part 11 Support


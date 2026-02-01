import { ProductDetail } from '../types';

export const humidityStabilityChamber: ProductDetail = {
    description: "Humidity chambers play a crucial role in a wide array of industries, including electronics, military and defense, pharmaceuticals, transportation, medical devices, shipping, and communications, among others. These chambers are versatile tools that enable companies to conduct various types of testing to ensure the quality and reliability of their products.\n\nAureole Pharma Tech has earned its reputation as a leading manufacturer of humidity chambers by meticulously optimizing every aspect of its chambers. Their temperature and humidity models are designed to provide high-performance and precise control, ensuring that companies can rely on these chambers for their testing needs.\n\nAureole Pharma Tech understands the critical role that testing plays in the success of businesses. They recognize that their chambers must match the same level of care, research, and innovation that companies invest in their products.\n\nOur Humidity chambers are essential tools in industries where environmental conditions significantly affect product performance. Companies rely on our humidity chambers for accurate and controlled testing, and Aureole Pharma Tech stands out as a trusted manufacturer that delivers the precision and reliability needed for successful product development and quality assurance.\n\n**Software: SIS-APP**\nSecure and Integrated Solutions for Applications, Products, and Processes. In the fast-paced landscape of today’s business world, the need for secure and seamlessly integrated solutions for applications, products, and processes has reached unprecedented levels. Our software, SIS-APP will manage sensitive data across various applications, products, and organizational processes, guaranteeing robust security and compliance with defined procedures. Rockwell Automation is our consulting and implementation partner for PLC and software solutions.",
    keyFeaturesHeading: "PLC Features",
    keyFeatures: [
        "PLC Based Control System Make - Allen Bradley",
        "PC Communication Via Ethernet",
        "PLC based : Controlling, Safety, Atomization, Communication & Database",
        "Online monitoring on Graphical LED Touch Screen Display Make - Allen Bradley",
        "Changing Set value of Master controller from HMI with password protection with auto log off",
        "PLC Based Scanner System",
        "PLC Based Safety Control System to Protect the Chambers from Overshoot and Undershoot of Temperature and Humidity",
        "Auto Changeover of Master Sensor In Case of Failure",
        "Auto Switch Over of Refrigeration System in Case of Failure",
        "Auto Change Over of Steam Generator in Case of Failure",
        "Alarm for Low Water Level with Reset System to Protect Steam Generator System",
        "Password Protected Door Opening with Reason Master",
        "Password Protected Chamber On / Off",
        "Password Protected Set Value Change",
        "Password Protected Settable Print Frequency For Master & Scanner",
        "Password Protected Restore Factory Setting",
        "Snooze Hooter System",
        "Event Logger Facility",
        "Actual Status Monitoring of Major Utilities (Sensor, Ref System, Steam Generation)",
        "GSM Alarm System (Mobile Alert)",
        "Hooter System",
        "Biometric system"
    ],
    specifications: [
        { parameter: "Temperature Range", details: "20°C to 60°C" },
        { parameter: "Humidity Range", details: "40% to 85% RH" },
        { parameter: "Accuracy", details: "± 0.2°C / ± 2.0% RH" },
        { parameter: "Uniformity", details: "± 1.0°C / ± 3.0% RH" },
        { parameter: "Test Suitable for", details: "25°C & 60% RH, 30°C & 65% RH, 40°C & 75% RH, 30°C & 75% RH" },
        { parameter: "Also available with low conditions", details: "25°C & 40% RH, 40°C & 25% RH, 30°C & 35% RH" }
    ],
    models: [],
    regularAttributes: [
        "Inner outer door with proof silicon",
        "Water & steam Tank.",
        "Low water indication",
        "Master & stand by sensor"
    ],
    addOnsAttributes: [
        "21 CFR part 11 Compliance",
        "Standby Refrigeration & Steam Generation System",
        "Scanner : 4 pt. temperature & humidity sensor",
        "Mobile Alert System",
        "Hooter System",
        "Door Access System (Numeric/Biometric)",
        "Extra Trays"
    ],
    image: "/products/StablilityChamber-Standalone/humidity-chamber.png",
    complexTable: {
        rows: [
            {
                cells: [
                    { content: "Model", rowSpan: 2, isHeader: true },
                    { content: "Capacity\n(In Liters)", rowSpan: 2, isHeader: true },
                    { content: "Tray", colSpan: 2, isHeader: true },
                    { content: "Inner Dimension\n(W x D x H) mm", rowSpan: 2, isHeader: true },
                    { content: "Outer Dimension\n(W x D x H) mm", rowSpan: 2, isHeader: true }
                ]
            },
            {
                cells: [
                    { content: "Quantity", isHeader: true },
                    { content: "Dimension", isHeader: true }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HC-2.0_V**" },
                    { content: "200", align: 'center' },
                    { content: "2", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "660 x 450 x 700", align: 'center' },
                    { content: "785 x 1130 x 1360", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HC-4.0_V**" },
                    { content: "400", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "700 x 650 x 900", align: 'center' },
                    { content: "825 x 1330 x 1560", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HC-6.0_V**" },
                    { content: "600", align: 'center' },
                    { content: "3", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "750 x 750 x 1075", align: 'center' },
                    { content: "875 x 1430 x 1735", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HC-8.0_V**" },
                    { content: "800", align: 'center' },
                    { content: "4", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "750 x 750 x 1425", align: 'center' },
                    { content: "875 x 1480 x 2085", align: 'center' }
                ]
            },
            {
                cells: [
                    { content: "AP_SA_HC-1.0K_V**" },
                    { content: "1000", align: 'center' },
                    { content: "4", align: 'center' },
                    { content: "-", align: 'center' },
                    { content: "850 x 750 x 1575", align: 'center' },
                    { content: "975 x 1480 x 2230", align: 'center' }
                ]
            }
        ],
        remark: "• Power Supply: Single Phase 230 V. Above are standard sizes and we can offer other (customised) sizes also V** = variant based upon construction & body."
    }
};

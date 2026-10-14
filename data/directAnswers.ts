// Question/answer pairs shown on key pages (and in prerendered HTML). Every answer is taken from
// public/content.md or the product data files; do not add claims that aren't in those sources.
export interface QA { q: string; a: string; link?: { href: string; label: string } }

export const DIRECT_ANSWERS: Record<string, { heading: string; items: QA[] }> = {
  "/products/stability-chambers": {
    heading: "Stability chambers: quick answers",
    items: [
      {
        q: "What temperature and humidity range do Aureole stability chambers cover?",
        a: "The Humidity Chamber and Stability Chamber are specified for 20°C to 60°C and 40% to 95% RH, with accuracy listed as ± 0.3°C / ± 2.0% RH. The Ultra Low Deep Freezer is specified for up to -80°C.",
        link: { href: "/products/humidity-chamber/", label: "Humidity Chamber specifications" },
      },
      {
        q: "Which standards are the photostability chambers designed for?",
        a: "Aureole Photostability Chambers are described as designed in accordance with ICH Q1B guidelines, with light-intensity tracking alongside temperature control.",
        link: { href: "/products/photostability-chamber/", label: "Photostability Chamber" },
      },
      {
        q: "What is the difference between a stand-alone chamber and a walk-in chamber?",
        a: "Stand-alone chambers are reach-in units. Walk-in chambers (humidity, cold, BOD incubator and deep freezer variants) are room-sized units for large-scale storage and testing.",
        link: { href: "/products/walk-in-humidity-chamber/", label: "Walk In Humidity Chamber" },
      },
      {
        q: "Can chambers be monitored with software?",
        a: "Yes. Aureole monitoring software supports 21 CFR Part 11 requirements through access controls, electronic signatures and audit trails, and also offers SCADA integration and SMS/email alerts. 21 CFR Part 11 support is listed as an add-on option on chamber product pages. Compliance of a given installation also depends on how the customer validates and operates it.",
        link: { href: "/software/", label: "Monitoring software" },
      },
    ],
  },
  "/software": {
    heading: "Monitoring software: quick answers",
    items: [
      {
        q: "Which 21 CFR Part 11 features does Aureole software provide?",
        a: "Secure access controls, electronic signatures and audit trails.",
      },
      {
        q: "How are temperature or humidity deviations reported?",
        a: "The software sends automated SMS and email notifications when temperature or humidity deviates.",
      },
      {
        q: "Can several chambers be monitored centrally?",
        a: "Aureole lists SCADA integration for its control systems, and the software supports multi-chamber configuration.",
      },
      {
        q: "Which equipment does the software work with?",
        a: "It is offered with Aureole chambers as an option. Compatibility with other makes has not been stated; contact the team to confirm.",
        link: { href: "/products/stability-chambers/", label: "Aureole stability chambers" },
      },
    ],
  },
  "/service": {
    heading: "Service: quick answers",
    items: [
      {
        q: "What does installation support include?",
        a: "On-site set up, calibration and commissioning of walk-in and stand-alone chambers.",
      },
      {
        q: "Does Aureole provide validation support?",
        a: "Yes. Service includes IQ, OQ and PQ execution, multi-point calibration with certification, thermal mapping and re-validation after repair, relocation or upgrade.",
      },
      {
        q: "What does preventive maintenance involve?",
        a: "Maintenance and technical support under AMC / CAMC plans, plus temperature and humidity calibration (NABL-traceable).",
      },
      {
        q: "How do I request service or a quotation?",
        a: "Call +91 86005 22240 or email enquiry@aureolepharmatech.com.",
        link: { href: "/products/", label: "Browse equipment" },
      },
    ],
  },
};

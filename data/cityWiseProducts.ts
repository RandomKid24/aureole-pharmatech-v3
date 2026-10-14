export interface CityWiseProduct {
    slug: string;
    productName: string;
    city: string;
}

export const PRODUCT_CITY_MAPPING: Record<string, string[]> = {
    "Walk In BOD Incubator": [
        "Ahmedabad", "Aurangabad", "Baddi", "Bangalore", "Bangladesh", "Chennai",
        "Dehradun", "Delhi", "Ghana", "Goa", "Guwahati", "Haridwar", "Hyderabad",
        "Mumbai", "Nashik", "Nepal", "Nigeria", "Pithampur", "Pune",
        "Vadodara", "Vapi", "Vietnam", "Visakhapatnam"
    ],
    "Walk In Cold Chamber": [
        "Ahmedabad", "Aurangabad", "Baddi", "Bangalore", "Bangladesh", "Chennai",
        "Dehradun", "Delhi", "Ghana", "Goa", "Guwahati", "Haridwar", "Hyderabad",
        "Mumbai", "Nashik", "Nepal", "Nigeria", "Pithampur", "Pune",
        "Vadodara", "Vapi", "Vietnam", "Visakhapatnam"
    ],
    "Walk In Deep Freezer": [
        "Ahmedabad", "Aurangabad", "Baddi", "Bangalore", "Chennai",
        "Dehradun", "Delhi", "Goa", "Guwahati", "Haridwar", "Hyderabad",
        "Mumbai", "Nashik", "Pithampur", "Pune", 
        "Vadodara", "Vapi", "Visakhapatnam"
    ],
    "Walk In Humidity Chamber": [
        "Ahmedabad", "Aurangabad", "Baddi", "Bangalore", "Bangladesh", "Chennai",
        "Dehradun", "Delhi", "Ghana", "Goa", "Guwahati", "Haridwar", "Hyderabad",
        "Mumbai", "Mumbai-2", "Nashik", "Nepal", "Nigeria", "Pithampur", "Pune",
        "Vadodara", "Vapi", "Vietnam", "Visakhapatnam"
    ]
};

export const CITIES = Array.from(new Set(Object.values(PRODUCT_CITY_MAPPING).flat()));

export const PRODUCTS = [
    { name: "Walk In BOD Incubator", slugPart: "walk-in-bod-incubator" },
    { name: "Walk In Cold Chamber", slugPart: "walk-in-cold-chamber" },
    { name: "Walk In Deep Freezer", slugPart: "walk-in-deep-freezer" },
    { name: "Walk In Humidity Chamber", slugPart: "walk-in-humidity-chamber" }
];

// Region for page copy. Only listed where known; unlisted locations (e.g. Delhi, countries) get no region suffix.
export const CITY_REGION: Record<string, string> = {
    Mumbai: "Maharashtra", "Mumbai-2": "Maharashtra", Pune: "Maharashtra", Nashik: "Maharashtra", Aurangabad: "Maharashtra",
    Ahmedabad: "Gujarat", Vadodara: "Gujarat", Vapi: "Gujarat", Bangalore: "Karnataka", Chennai: "Tamil Nadu",
    Hyderabad: "Telangana", Visakhapatnam: "Andhra Pradesh", Goa: "Goa", Guwahati: "Assam", Haridwar: "Uttarakhand",
    Dehradun: "Uttarakhand", Baddi: "Himachal Pradesh", Pithampur: "Madhya Pradesh",
};

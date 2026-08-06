
export const slugify = (text: string): string => {
    if (!text) return '';
    if (text === "Modular Laboratory Furniture") return "lab-furniture";
    return text
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/\//g, '-')   // Replace slashes with dashes
        .replace(/[()]/g, '')  // Remove parentheses
        .replace(/\./g, '-')   // Replace dots with dashes
        .replace(/°/g, '')     // Remove degree symbol (the following C already forms the "c")
        .replace(/\s+/g, '-')  // Replace spaces with dashes
        .replace(/--+/g, '-')  // Collapse multiple dashes
        .replace(/^-+|-+$/g, ''); // Trim start/end dashes
};

// Helper to find product original name from catalog by matching slug
export const findValuesBySlug = (slug: string, productDetails: Record<string, any>) => {
    const targetSlug = slugify(slug);
    const foundKey = Object.keys(productDetails).find(key => {
        const keySlug = slugify(key);
        return keySlug === slug || keySlug === targetSlug;
    });
    return {
        originalName: foundKey || decodeURIComponent(slug),
        product: foundKey ? productDetails[foundKey] : null
    };
};

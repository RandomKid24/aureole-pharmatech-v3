
export interface ModelSpec {
    model: string;
    capacity: string;
    interior: string;
    exterior?: string;
    trays?: string;
    power: string;
}

export interface TableCell {
    content: string;
    colSpan?: number;
    rowSpan?: number;
    isHeader?: boolean;
    align?: 'left' | 'center' | 'right';
}

export interface TableRow {
    cells: TableCell[];
}

export interface ComplexTable {
    rows: TableRow[];
}

export interface TechnicalSpec {
    parameter: string;
    details: string;
}

export interface ProductDetail {
    description: string;
    keyFeatures: string[];
    specifications: TechnicalSpec[];
    models: ModelSpec[];
    regularAttributes: string[];
    addOnsAttributes: string[];
    image?: string;
    images?: string[];
    imageCaptions?: string[];
    keyFeaturesHeading?: string;
    regularAttributesHeading?: string;
    variantTable?: {
        headers: string[];
        rows: string[][];
        remark?: string;
    };
    complexTable?: ComplexTable;
}

export interface SubType {
    id: string;
    name: string;
    products: string[];
}

export interface Category {
    id: string;
    title: string;
    description: string;
    subTypes: SubType[];
}

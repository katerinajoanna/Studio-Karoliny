export interface Offer {
    _id: string;
    category: string;
    service: string;
    price: number;
    description: string;
    duration?: string; //  nie wszystkie mają duration
}
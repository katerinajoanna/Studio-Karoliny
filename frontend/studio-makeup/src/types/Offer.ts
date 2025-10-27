export interface Service {
    _id?: string;
    category: string;
    service: string;
    price: number;
    description: string;
    duration?: string; //  nie wszystkie mają duration
}

export interface Offer {
    _id?: string;
    category: string;
    services: Service[];
}

export interface ServicePayload {
    category: string;
    service: string;
    price: number;
    description: string;
    serviceId?: string; // do edycji/usuwania
}
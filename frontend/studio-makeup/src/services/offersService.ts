import { type Offer, type ServicePayload } from '../types/Offer';

export const getOffers = async (): Promise<Offer[]> => {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error(`Błąd pobierania ofert: ${res.status}`);
    }
    return res.json() as Promise<Offer[]>; // upewniamy TS, że to jest Offer[]
};

const BASE_URL = 'http://localhost:5000/offers';
const TOKEN = 'admin345';

export const createOffer = async (serviceData: ServicePayload): Promise<ServicePayload> => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(serviceData),
    });

    if (!res.ok) throw new Error('Błąd przy tworzeniu oferty');
    return res.json();
};

export const updateOffer = async (serviceData: ServicePayload): Promise<ServicePayload> => {
    if (!serviceData.serviceId) throw new Error('Brak serviceId do aktualizacji');

    const res = await fetch(`${BASE_URL}/${serviceData.serviceId}`, {  // <--- ID w URL
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(serviceData),
    });

    if (!res.ok) throw new Error('Błąd przy aktualizacji oferty');
    return res.json();
};


// usuwanie pojedynczej uslugi
export const deleteService = async (serviceId: string) => {
    const res = await fetch(`${BASE_URL}/${serviceId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${TOKEN}` },
    });

    if (!res.ok) throw new Error('Błąd przy usuwaniu usługi');
    return res.json();
};


// usuwanie calej kategorii
export const deleteCategory = async (categoryId: string) => {
    const res = await fetch(`${BASE_URL}/category/${categoryId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${TOKEN}` },
    });

    if (!res.ok) throw new Error('Błąd przy usuwaniu kategorii');
    return res.json();
};
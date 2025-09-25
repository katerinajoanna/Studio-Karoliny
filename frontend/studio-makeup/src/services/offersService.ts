import { type Offer } from '../types/Offer';

const BASE_URL = 'http://localhost:5000/offers';
const TOKEN = 'admin345';

export const getOffers = async (): Promise<Offer[]> => {
    const res = await fetch(BASE_URL);
    return res.json();
};

export const createOffer = async (offer: Offer): Promise<Offer> => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(offer),
    });
    return res.json();
};

export const updateOffer = async (id: string, offer: Offer): Promise<Offer> => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(offer),
    });
    return res.json();
};

export const deleteOffer = async (id: string): Promise<{ message: string }> => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${TOKEN}` },
    });
    return res.json();
};

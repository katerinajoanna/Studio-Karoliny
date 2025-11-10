import { Offer } from '../models/Offer.js';

// Pobieranie wszystkich ofert
export const getOffers = async (req, res, next) => {
    try {
        const items = await Offer.find();
        res.json(items);
    } catch (err) {
        console.error('Error fetching offers:', err);
        res.status(500).json({ message: 'Błąd pobierania ofert' });
    }
};
// Dodawanie nowej usługiimport

import { Offer } from '../models/Offer.js';

export const createOffer = async (req, res, next) => {
    try {
        const { category, service, price, description, duration } = req.body;
        if (!category || !service || !price || !description)
            return res.status(400).json({ message: 'All fields are required' });

        const normalizedCategory = category.toLowerCase().replace(/\s+/g, '-');

        let offer = await Offer.findOne({ category: normalizedCategory });

        if (offer) {
            // dodajemy usługę do istniejącej kategorii
            offer.services.push({ service, price, description, duration });
        } else {
            // tworzymy nową kategorię
            offer = new Offer({
                category: normalizedCategory,
                services: [{ service, price, description, duration }]
            });
        }

        await offer.save();
        res.status(201).json(offer);
    } catch (err) {
        next(err);
    }
};
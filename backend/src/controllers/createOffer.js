// Dodawanie nowej usługiimport

import { Offer } from '../models/Offer.js';

export const createOffer = async (req, res, next) => {
    try {
        const { category, service, price, description, duration } = req.body;

        // wymagane tylko te pola:
        if (!category || !service || !price)
            return res.status(400).json({ message: 'Category, service and price are required' });

        const normalizedCategory = category.toLowerCase().replace(/\s+/g, '-');

        let offer = await Offer.findOne({ category: normalizedCategory });

        const serviceData = {
            service,
            price,
            description: description || "",   // pusty OK
            duration
        };

        if (offer) {
            offer.services.push(serviceData);
        } else {
            offer = new Offer({
                category: normalizedCategory,
                services: [serviceData]
            });
        }

        await offer.save();
        res.status(201).json(offer);
    } catch (err) {
        next(err);
    }
};

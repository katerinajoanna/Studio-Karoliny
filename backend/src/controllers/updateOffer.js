// Aktualizacja pojedynczej usługi w kategorii  PUT /offers/:serviceId

import { Offer } from '../models/Offer.js';

export const updateOffer = async (req, res, next) => {
    try {
        const { service, price, description, duration } = req.body;
        const { serviceId } = req.params;

        const offer = await Offer.findOne({ "services._id": serviceId });
        if (!offer) return res.status(404).json({ message: 'Offer not found' });

        const serviceToUpdate = offer.services.id(serviceId);

        if (service !== undefined) serviceToUpdate.service = service;
        if (price !== undefined) serviceToUpdate.price = price;
        if (description !== undefined) serviceToUpdate.description = description; // ← najważniejsze
        if (duration !== undefined) serviceToUpdate.duration = duration;

        await offer.save();
        res.json({ message: 'Service updated successfully', offer });
    } catch (err) {
        next(err);
    }
};

// Aktualizacja pojedynczej usługi w kategorii  PUT /offers/:serviceId

import { Offer } from '../models/Offer.js';

export const updateOffer = async (req, res, next) => {
    try {
        const { service, price, description, duration } = req.body;
        const { serviceId } = req.params; // ID usługi z URL

        // znajdź kategorię, która zawiera tę usługę
        const offer = await Offer.findOne({ "services._id": serviceId });
        if (!offer) return res.status(404).json({ message: 'Offer not found' });

        const serviceToUpdate = offer.services.id(serviceId);
        if (!serviceToUpdate) return res.status(404).json({ message: 'Service not found' });

        if (service) serviceToUpdate.service = service;
        if (price) serviceToUpdate.price = price;
        if (description) serviceToUpdate.description = description;
        if (duration) serviceToUpdate.duration = duration;

        await offer.save();
        res.json({ message: 'Service updated successfully', offer });
    } catch (err) {
        next(err);
    }
};
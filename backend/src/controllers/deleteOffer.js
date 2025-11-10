// Usunięcie pojedynczej usługi

import { Offer } from '../models/Offer.js';

export const deleteOffer = async (req, res, next) => {
    try {
        const serviceId = req.params.id  // id uslugi z URL
        // szukaj dokumentu , ktory zawiera usluge z tym id
        const offer = await Offer.findOne({ "services._id": serviceId });
        if (!offer)
            return res.status(400).json({ message: 'Offer not found!' });

        //usuniecie uslugi recznie
        offer.services = offer.services.filter(s => s._id.toString() !== serviceId);
        await offer.save();

        res.json({ message: 'Service deleted', offer });
    } catch (err) {
        next(err);
    }
};
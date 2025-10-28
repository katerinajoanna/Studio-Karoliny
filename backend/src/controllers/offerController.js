// logika rzadan

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

// Dodawanie nowej usługi
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

// Aktualizacja pojedynczej usługi w kategorii   PUT /offers/:serviceId

export const updateOffer = async (req, res, next) => {
    try {
        const { category, service, price, description, duration } = req.body;
        const { serviceId } = req.params; //  ID z URL

        const offer = await Offer.findOne({ category });
        if (!offer) return res.status(404).json({ message: 'Offer not found' });

        const serviceToUpdate = offer.services.id(serviceId);
        if (!serviceToUpdate) return res.status(404).json({ message: 'Service not found' });

        serviceToUpdate.service = service;
        serviceToUpdate.price = price;
        serviceToUpdate.description = description;
        if (duration) serviceToUpdate.duration = duration   // jesli czas uslugi istnieje

        await offer.save();
        res.json(offer);
    } catch (err) {
        next(err);
    }
};

// Usunięcie całej kategorii (oferty)
export const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deleted = await Offer.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: 'Category not found' });

        res.json({ message: 'Category deleted successfully' });
    } catch (err) {
        next(err);
    }
};


// Usunięcie pojedynczej usługi
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

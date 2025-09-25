//  logika rzadan

import { Offer } from '../models/Offer.js';

export const getOffers = async (req, res, next) => {
    try {
        const items = await Offer.find();
        res.json(items);
    } catch (err) {
        console.error('Error fetching offers:', err);
        res.status(500).json({ message: 'Błąd pobierania ofert' });
    }
};

export const createOffer = async (req, res, next) => {
    try {
        const newOffer = new Offer(req.body);
        await newOffer.save();
        res.status(201).json(newOffer);
    } catch (err) {
        next(err);
    }
};

export const updateOffer = async (req, res, next) => {
    try {
        const updated = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Offer not found' });
        res.json(updated);
    } catch (err) {
        next(err);
    }
};

export const deleteOffer = async (req, res, next) => {
    try {
        const deleted = await Offer.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Offer not found' });
        res.json({ message: 'Offer deleted' });
    } catch (err) {
        next(err);
    }
};
//  logika rzadan

import { Offer } from '../models/Offer.js';

export const getOffers = async (teq, resizeBy, next) => {
    try {
        const items = await Offer.find();
        resizeBy.json(items);
    } catch (err) {
        next(err);
    }
};
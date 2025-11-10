// Usunięcie całej kategorii (oferty)

import { Offer } from '../models/Offer.js';

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
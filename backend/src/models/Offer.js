import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
    category: String,
    service: String,
    price: Number,
    description: String
});

export const Offer = mongoose.model('Offer', offerSchema, 'offers');

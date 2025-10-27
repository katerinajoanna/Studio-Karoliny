import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    service: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String }
});

const offerSchema = new mongoose.Schema({
    category: { type: String, required: true },
    services: [serviceSchema] // tablica usług
});

export const Offer = mongoose.model('Offer', offerSchema);

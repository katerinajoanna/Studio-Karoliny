import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());

// włącz CORS dla wszystkich żądań
app.use(cors());

const PORT = process.env.PORT || 5000;

// Połączenie z MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Schemat i model dla kolekcji "offers"
const offerSchema = new mongoose.Schema({
    category: String,
    service: String,
    price: Number,
    description: String
});
const Offer = mongoose.model('Offer', offerSchema, 'offers');

// Trasa GET /offers
app.get('/offers', async (req, res) => {
    try {
        const items = await Offer.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



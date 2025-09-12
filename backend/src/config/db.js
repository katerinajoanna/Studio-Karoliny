//  polaczenie z baza danych

import mongoose from 'mongoose';
//import dotenv from 'dotenv';

//dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.log('MongoDB connection error:', err);
        process.exit(1); // zakonczenie procesu jestli sie nie laczy z baza
    }
};


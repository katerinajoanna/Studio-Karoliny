import express from 'express';
import cors from 'cors';

import offerRoutes from './routes/offerRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/offers', offerRoutes);

app.use(errorHandler);

export default app;

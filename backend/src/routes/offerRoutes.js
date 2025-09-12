// definiuje trasy

import { Router } from 'express';
import { getOffers } from '../controllers/offerController.js';

const router = Router();

router.get('/', getOffers);

export default router;

// definiuje trasy

import { Router } from 'express';
import { getOffers, createOffer, updateOffer, deleteOffer } from '../controllers/offerController.js';
import { authAdmin } from '../middleware/authAdmin.js';

const router = Router();

router.get('/', getOffers);
router.post('/', authAdmin, createOffer);  //admin
router.put('/:id', authAdmin, updateOffer);  //admin
router.delete('/:id', authAdmin, deleteOffer);  //admin


export default router;

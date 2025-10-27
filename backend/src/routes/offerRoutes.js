// definiuje trasy

import { Router } from 'express';
import { getOffers, createOffer, updateOffer, deleteOffer, deleteCategory } from '../controllers/offerController.js';
import { authAdmin } from '../middleware/authAdmin.js';

const router = Router();

router.get('/', getOffers);

// tylko dla admin
router.post('/', authAdmin, createOffer);
router.put('/:serviceId', authAdmin, updateOffer);
router.delete('/service/:id', authAdmin, deleteOffer);  // usuwa pojedynczą usługę
router.delete('/category/:id', authAdmin, deleteCategory);   // usuwacałą kategorię

export default router;

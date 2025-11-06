// definiuje tras

import { Router } from 'express';
import {
    getOffers,
    createOffer,
    updateOffer,
    deleteOffer,
    deleteCategory
} from '../controllers/offerController.js';
import { authAdmin } from '../middleware/authAdmin.js';

const router = Router();

router.get('/', getOffers);   // pobiera wszystkie oferty
router.post('/', authAdmin, createOffer);  // dodaje nową ofertę (tylko admin)
router.put('/:serviceId', authAdmin, updateOffer);  // aktualizuje konkretną usługę (tylko admin)
router.delete('/service/:id', authAdmin, deleteOffer);  // usuwa pojedynczą usługę (tylko admin)
router.delete('/category/:id', authAdmin, deleteCategory);  // usuwa całą kategorię (tylko admin)

export default router;

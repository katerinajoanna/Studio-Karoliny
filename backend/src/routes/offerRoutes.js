// definiuje tras

import { Router } from 'express';

import { getOffers } from '../controllers/getOffers.js';
import { createOffer } from '../controllers/createOffer.js';
import { updateOffer } from '../controllers/updateOffer.js';
import { deleteOffer } from '../controllers/deleteOffer.js';
import { deleteCategory } from '../controllers/deleteCategory.js';

import { authAdmin } from '../middleware/authAdmin.js';

const router = Router();

router.get('/', getOffers);   // pobiera wszystkie oferty
router.post('/', authAdmin, createOffer);  // dodaje nową ofertę (tylko admin)
router.put('/:serviceId', authAdmin, updateOffer);  // aktualizuje konkretną usługę (tylko admin)
router.delete('/service/:id', authAdmin, deleteOffer);  // usuwa pojedynczą usługę (tylko admin)
router.delete('/category/:id', authAdmin, deleteCategory);  // usuwa całą kategorię (tylko admin)

export default router;

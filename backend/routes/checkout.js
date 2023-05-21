import express, { Router } from 'express';

import { addCheckout, getAllCheckouts, deleteCheckout, editCheckout, getCheckout } from '../controllers/checkout.js';
import {catchAsync} from '../utils/catchAsync.js';

const router = express.Router();

router.post('/', catchAsync(addCheckout));
router.get('/', catchAsync(getAllCheckouts));
router.delete('/:id', catchAsync(deleteCheckout));
router.patch('/:id',  catchAsync(editCheckout));
router.get('/:id', catchAsync(getCheckout));

export default router;
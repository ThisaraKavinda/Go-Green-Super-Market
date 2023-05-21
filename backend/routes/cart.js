import express, { Router } from 'express';

import { addCart, getAllCarts, deleteCart, editCart, getCart } from '../controllers/cart.js';
import {catchAsync} from '../utils/catchAsync.js';

const router = express.Router();

router.post('/', catchAsync(addCart));
router.get('/', catchAsync(getAllCarts));
router.delete('/:id', catchAsync(deleteCart));
router.patch('/:id',  catchAsync(editCart));
router.get('/:id', catchAsync(getCart));

export default router;
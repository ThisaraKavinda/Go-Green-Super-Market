import express, { Router } from 'express';

import { addCompany, getAllCompanies, getNumOfCompanies, getCompaniesOfAType, deleteCompany, editCompany } from '../controllers/company.js';
import {catchAsync} from '../utils/catchAsync.js';

const router = express.Router();

router.post('/',  catchAsync(addCompany));
router.get('/', catchAsync(getAllCompanies));
router.get('/getProductsOfAType/:type', catchAsync(getCompaniesOfAType));
router.delete('/:id', catchAsync(deleteCompany));
router.get('/getNumOf', catchAsync(getNumOfCompanies));
router.patch('/:id',  catchAsync(editCompany));

export default router;
import express from 'express';
import { getDeals, getSellers, getArrivals, getAll } from '../controllers/productHandlers.js';
const router = express.Router();

router.get('/deals', getDeals);

router.get('/sellers', getSellers);

router.get('/arrivals', getArrivals);

router.get('/all', getAll);

export default router;
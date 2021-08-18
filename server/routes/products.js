import express from 'express';
import { getDeals, getSellers, getArrivals } from '../controllers/productHandlers.js';
const router = express.Router();

router.get('/deals', getDeals);

router.get('/sellers', getSellers);

router.get('/arrivals', getArrivals);

export default router;
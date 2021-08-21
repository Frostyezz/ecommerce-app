import Product from '../models/product.js';
import mongoose from 'mongoose';

export const getDeals = async (req, res) => {
    try {
        const deals = await Product.find({oldPrice:{$gt: 0}}).limit(8);

        res.status(200).json(deals);
    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const getSellers = async (req, res) => {
    try {
    const sellers = await Product.find().sort({sold: -1}).limit(8);
    res.status(200).json(sellers);
    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const getArrivals = async (req, res) => {
    try {
    const arrivals = await Product.aggregate([{$sample: {size:8}}], (err, results) => results);
    res.status(200).json(arrivals);
    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const getAll = async (req, res) => {
    try {
        const all = await Product.find();
        res.status(200).json(all);
    } catch (error) {
        res.status(404).json({message: error});
    }
}
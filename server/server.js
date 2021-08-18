import dotenv from 'dotenv';
if(process.env.NODE_ENV !== 'production') 
{
    dotenv.config();
}

import pkg from 'prop-types';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/products.js';

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({ extended: true}));
app.use(cors());

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then (() =>{
    console.log("connected to mongo");
})
.catch(err =>{
    console.log(err);
})

app.listen(process.env.PORT || 3030, () => console.log('Listening on 3030'));

app.get('/', (req, res) => res.send('Go to /products to fetch the products.'));

app.use('/products', productRoutes);
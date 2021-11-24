import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import productRoutes from './routes/products.js';

import connectDB from './config/db.js';
const app = express();

//DB Connection
connectDB();

const corsOptions = {
    origin:'*',
    Credentials:true,
    optionSuccessStatus:200,
}
app.use(cors(corsOptions));
app.use(express.json({extended:false}));


app.use('/products',productRoutes);

const  PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));




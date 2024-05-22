import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import connectDB from './config/database';

dotenv.config();


const app = express();

const PORT = process.env.PORT || 3000;

connectDB();


// BodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

import express, { Router } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import connectDB from './config/database';
const cors = require('cors') // it doesnt support es6 
import * as addressController from './controller/AddressController';


dotenv.config();


const app = express();

const PORT = process.env.PORT || 3000;

connectDB();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())


const router = Router();

router.post('/addresses', addressController.createAddress);
router.get('/addresses', addressController.getAllAddresses);
router.get('/addresses/:id', addressController.getAddress);
router.put('/addresses/:id', addressController.updateAddress);
router.delete('/addresses/:id', addressController.deleteAddress);


app.use('/api/v1', router);



app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

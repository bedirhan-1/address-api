import mongoose from 'mongoose';

export interface ICity extends mongoose.Document {
    city: string,
    _id: string
}




const citySchema = new mongoose.Schema({
    city: { type: String, required: true },
});




const City = mongoose.model<ICity>('City', citySchema);

export default City;

import mongoose from 'mongoose';

export interface IAddress extends mongoose.Document {
    city: string,
    addressTitle: string,
    addressDetails: string,
    _id: string
}

export type CreateAddressDto = {
    city: string,
    addressTitle: string,
    addressDetails: string
}

export interface UpdateAddressDto extends Partial<CreateAddressDto> {}


const addressSchema = new mongoose.Schema({
    city: { type: String, required: true },
    addressTitle: { type: String, required: true },
    addressDetails: { type: String, required: true },
});




const Address = mongoose.model<IAddress>('Address', addressSchema);

export default Address;

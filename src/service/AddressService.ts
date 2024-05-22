import  Address, { IAddress }  from '../model/address';
import { CreateAddressDto} from '../model/address';


export class AddressService {
    async createAddress(data: CreateAddressDto) : Promise<IAddress | undefined> {
        return await Address.create(data);
    }
    
    async getAllAddresses() : Promise<IAddress[] | null> {
        return await Address.find({});
    }

    async getAddressById(addressId: string): Promise<IAddress | null> {
        return await Address.findById(addressId);
    }   

    async updateAddress(addressId: string, updateData: IAddress): Promise<IAddress | null>{
        return await Address.findByIdAndUpdate(addressId, updateData, { new: true });
    }

    async deleteAddress(addressId: string): Promise<void> {
        await Address.findByIdAndDelete(addressId);
        return;
    }
}

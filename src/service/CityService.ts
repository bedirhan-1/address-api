import City, { ICity } from '../model/cities';


export class CityService {
    
    
    async getAllCities() : Promise<ICity[] | null> {
        return await City.find({});
    }

   
}

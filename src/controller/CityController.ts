import { Request, Response } from 'express';

import { CityService } from '../service/CityService';

const cityService = new CityService();


export async function getAllCities(req: Request, res: Response) {
    try {
        const cities = await cityService.getAllCities();
        res.send(cities);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

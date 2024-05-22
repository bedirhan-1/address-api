import { Request, Response } from 'express';
import { AddressService } from '../service/AddressService'

const addressService = new AddressService();

export async function createAddress(req: Request, res: Response) {
    try {
        const address = await addressService.createAddress(req.body);
        res.status(201).send(address);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export async function getAddress(req: Request, res: Response) {
    try {
        const address = await addressService.getAddressById(req.params.id);
        if (!address) {
            return res.status(404).send('Address not found');
        }
        res.send(address);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export async function updateAddress(req: Request, res: Response) {
    try {
        const updatedAddress = await addressService.updateAddress(req.params.id, req.body);
        if (!updatedAddress) {
            return res.status(404).send('Address not found');
        }
        res.send(updatedAddress);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export async function deleteAddress(req: Request, res: Response) {
    try {
        const deletedAddress = await addressService.deleteAddress(req.params.id);
        res.send(deletedAddress);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export async function getAllAddresses(req: Request, res: Response) {
    try {
        const addresses = await addressService.getAllAddresses();
        res.send(addresses);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

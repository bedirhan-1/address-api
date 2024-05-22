import Joi from 'joi';


export const addressSchema = Joi.object({
    city: Joi.string().required().min(2).max(100).label('City'),
    addressTitle: Joi.string().required().min(2).max(100).label('Address Title'),
    addressDetails: Joi.string().required().min(5).max(500).label('Address Details')
});

export const updateAddressSchema = Joi.object({
    city: Joi.string().min(2).max(100).label('City'),
    addressTitle: Joi.string().min(2).max(100).label('Address Title'),
    addressDetails: Joi.string().min(5).max(500).label('Address Details')
}).or('city', 'addressTitle', 'addressDetails');
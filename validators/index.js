const Joi = require('joi');

const address = Joi.object({
  buildingNumber: Joi.string().required(),
  lat: Joi.number(),
  lon: Joi.number(),
  postcode: Joi.string().required(),
  state: Joi.string().required(),
  street: Joi.string().required(),
  suburb: Joi.string().required(),
  unitNumber: Joi.string()
});

const proerty = Joi.object({
  address: address.required(),
  propertyTypeId: Joi.number().required(),
  readyState: Joi.string().required(),
  reference: Joi.string().required(),
  shortId: Joi.string().required(),
  status: Joi.number().required(),
  type: Joi.string().required(),
  valfirm: Joi.string().allow(null),
  workflow: Joi.string().required()
});

const payload = Joi.array().items(proerty);

const request = {
  payload: payload.required()
};

module.exports = request;

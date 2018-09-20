const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Joi = require('joi');
const app = express();
const validators = require('./validators');
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.listen(port);

app.post('/', (req, res) => {
  const body = req.body;
  const ret = Joi.validate(body, validators, {
    allowUnknown: false,
    abortEarly: false
  });
  if (ret.error) {
    res.status(400).json({ error: ret.error.toString() });
  } else {
    const filteredResults = body.payload
      .filter(property => property.type === 'htv' && property.workflow === 'completed')
      .map(property => {
        const { type, workflow } = property;
        const { unitNumber, buildingNumber, street, suburb, state, postcode } = property.address;
        const concataddress = [unitNumber, buildingNumber, street, suburb, state, postcode]
          .filter(i => i)
          .join(' ');
        return { concataddress: concataddress, type, workflow };
      });
    res.status(200).json({
      response: filteredResults
    });
  }
});

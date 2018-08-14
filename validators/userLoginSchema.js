const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    // reCaptchaResponse: Joi.string().required(),
});

module.exports = schema;
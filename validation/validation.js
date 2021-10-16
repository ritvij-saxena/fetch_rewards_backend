const Joi = require('@hapi/joi')

const validateAddTransaction = (body) => {
    const schema = Joi.object({
        payer: Joi.string().required(),
        points: Joi.number().required(),
        timeStamp: Joi.date().iso().required()
    })
    return schema.validate(body)
}

const validateSpent = (body) => {
    const schema = Joi.object({
        points: Joi.number().required()
    })
    return schema.validate(body)
}

module.exports.validateAddTransaction = validateAddTransaction
module.exports.validateSpent = validateSpent
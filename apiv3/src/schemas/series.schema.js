const Joi = require('joi')
const serieSchema = Joi.object().keys(
    {
        nombre: Joi.string().required().min(3).max(255).messages({
            "any.required":"nombre es requerido",
            "string.min":"nombre debe tener como minimo {#limit} caracteres",
            "string.max":"nombre debe tener como maximo {#limit} caracteres",
            "string.empty":"nombre no puede ser vacio"
        }),
        plataforma:Joi.string().required().valid("netflix","star+","flow").messages({
            "any.required":"plataforma es requerido",
            "any.only":"las plataformas disponibles son: netflix , star+ , flow",
            "string.empty":"nombre no puede ser vacio"
        }),
        disponible: Joi.boolean().required().messages({
            "any.required":"disponible es requerido"
        })
    }
)
module.exports = serieSchema
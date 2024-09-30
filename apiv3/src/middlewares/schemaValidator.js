const schemaValidator = (schema)=>{
    return (req, res, next) => {
        const result = schema.validate(req.body, { abortEarly: false });
        if (result.error) {
          return res.status(400).json({
            mensaje: "Error de validación",
            errores: result.error.details.map((e) => {
              return { atributo: e.path[0], mensaje: e.message };
            }),
          });
        }
        next();
      };
}

module.exports= schemaValidator
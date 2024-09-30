const seriesSchema=require('./src/schemas/series.schema')

const resultado = seriesSchema.validate({
    nombre:"Gerasdfasdsadsa",
    plataforma:"netflixs",
    disponible: false
},{abortEarly:false})

console.log(resultado.error.details)
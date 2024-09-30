const { Router } = require('express')
const seriesController= require('../controllers/series.controller')
const {seriesMiddleware} = require('../middlewares')
const schemaValidator=require('../schemas/series.schema')
const {serieSchema}=require('../middlewares')
const route = Router()

route.get('/series', seriesController.getAllSeries )

route.get('/series/:id', 
    seriesMiddleware.validateIdSerie, 
    seriesController.getSerieById)

route.delete('/series/:id',
    seriesMiddleware.validateIdSerie, 
    seriesController.deleteById)

route.post('/series', schemaValidator(serieSchema), seriesController.createSerie)

route.put('/series/:id',
    schemaValidator(serieSchema), 
    seriesMiddleware.validateIdSerie, 
    seriesController.updateSerie)

module.exports = route
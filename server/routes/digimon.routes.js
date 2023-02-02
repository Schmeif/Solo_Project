const DigimonController = require('../controllers/digimon.controller')

module.exports = (app) => {

    app.post('/api/createDigimon', DigimonController.createDigimon)


    app.get('/api/getDigimon', DigimonController.getDigimon)


    app.get('/api/getOneDigimon/:id', DigimonController.getOneDigimon)


    app.put('/api/updateDigimon/:id', DigimonController.updateDigimon)


    app.delete('/api/deleteDigimon/:id', DigimonController.deleteDigimon)
}
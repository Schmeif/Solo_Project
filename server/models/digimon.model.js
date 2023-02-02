const mongoose = require ('mongoose')

const DigimonSchema = mongoose.Schema({
    generation:{
        type:String,
        required:[true,"Generation Required "],
        minLength:[3,"Must be at least 3 characters in length"],
    },
    name:{
        type:String,
        required:[true,"Name Required "],
        minLength:[3,"Must be at least 3 characters in length"],
    },
    img:{
        type:String,
        required:[true,"IMG Required "],
    },
}, {timestamps:true})

const Digimon = mongoose.model('Digimon', DigimonSchema)

module.exports = Digimon
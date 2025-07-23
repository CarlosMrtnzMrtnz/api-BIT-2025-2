const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre: {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 10,
        match : [a-zA-Z]+$
    },
    apellido : {
        type: String,
        required : false,
        default : "no tiene",
        minlength : 3,
        maxlength : 10,
        match : [a-zA-Z]+$
    },
    edad : {
        type : Number,
        required : true
    }
})

const userModel = mongoose.model('usuario', userSchema)

module.exports = userModel
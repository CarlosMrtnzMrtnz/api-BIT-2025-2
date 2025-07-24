const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre: {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 10,
        match : /^[a-zA-ZáéíóúüÁÉÍÓÚÜ]+$/
    },
    apellido : {
        type: String,
        required : false,
        default : "no tiene",
        minlength : 3,
        maxlength : 10,
        match : /^[a-zA-ZáéíóúüÁÉÍÓÚÜ]+$/
    },
    edad : {
        type : Number,
        required : true
    }
},{
    timestamps: true,
    versionKey: false
}
)

const userModel = mongoose.model('usuario', userSchema)

module.exports = userModel
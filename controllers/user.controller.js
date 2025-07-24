const mongoose = require("mongoose")
const userModel = require("../models/user.model")

const usuarios = [
  {
    "id": 1,
    "nombre": "Lucía",
    "apellido": "Martínez",
    "correo": "lucia.martinez@example.com",
    "edad": 28
  },
  {
    "id": 2,
    "nombre": "Carlos",
    "apellido": "Gómez",
    "correo": "carlos.gomez@example.com",
    "edad": 34
  },
  {
    "id": 3,
    "nombre": "Ana",
    "apellido": "Rodríguez",
    "correo": "ana.rodriguez@example.com",
    "edad": 22
  },
  {
    "id": 4,
    "nombre": "Diego",
    "apellido": "Fernández",
    "correo": "diego.fernandez@example.com",
    "edad": 41
  },
  {
    "id": 5,
    "nombre": "María",
    "apellido": "López",
    "correo": "maria.lopez@example.com",
    "edad": 30
  }
]

exports.getUsuarios = async (req, res)=> {
    try {
        let data = await userModel.find()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
}

exports.getOneUser = async (req, res)=> {
    try {
        let id = req.params.id
        
        let usuario = await userModel.findOne({_id:id}) // findOne({_id:id})
        
        if (usuario) {
            res.json(usuario)
        } else {
            res.json({msj:"usuario no encontrado!"})
        }
    } catch (error) {
        res.json(error)
    }

}

exports.delteUser = async (req, res)=> {
    try {
        let id = req.params.id

        if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'ID no válido' });
        }
        
        let user = await userModel.findByIdAndDelete(id)
        if (user) {
            res.json(user)
        } else {
            res.json({msj:"Usuario no encontrado!"})
        }
    } catch (error) {
        res.json(error)
    }
}

exports.createUser = async (req, res)=> {
    try {
        let datos = req.body
        datos.id= 1
        let newUser = new userModel(datos)
        let guardado = await newUser.save()
        res.json(guardado)
    } catch (error) {
        res.json(error)
    }
}

exports.updateUser = async (req, res)=> {
    try {
        let id = req.params.id
        let data = req.body
        let updateUser = await userModel.findByIdAndUpdate(id,data)
        if (updateUser) {
            let modificado = Object.assign(updateUser,data)
            res.json(modificado)
        } else {
            res.json({msj:"No se encontro el usuario"})
        }

    } catch (error) {
        res.json(error)
    }
}
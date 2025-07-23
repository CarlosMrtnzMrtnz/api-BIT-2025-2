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
        userModel.find()
    } catch (error) {
        res.json(error)
    }
}

exports.getOneUser = (req, res)=> {
    let id = req.params.id
    for (let i = 0; i < usuarios.length; i++) {
        const element = usuarios[i];
        if (id == element.id) {
            res.json(element)
        }
    }
}

exports.delteUser = (req, res)=> {
    let id = req.params.id
    let eliminado = false
    for (let i = 0; i < usuarios.length; i++) {
        const element = usuarios[i];
        if (element.id == id) {
            let deletado = usuarios.splice(i,1)
            eliminado = true
            res.json(deletado)
        } 
    }
    if (eliminado == false) {
            res.json({msj:"User no encontrado"})
    }
}

exports.createUser = (req, res)=> {
    let datos = req.body
    //console.log(req.body);
    
    let newUSer = usuarios.push(datos)
    res.json(newUSer)
}

exports.updateUser = (req, res)=> {
    let id = req.params.id
    let data = req.body
    for (let i = 0; i < usuarios.length; i++) {
        let element = usuarios[i];
        if (element.id == id) {
            let modificado = Object.assign(element,data)
            res.json(modificado)
        }
    }
}
const mongoose = require('mongoose')

const connetDB = async ()=> {
    try {
        await mongoose.connect('mongodb://localhost:27017/apiBit')
        console.log("Connected to database, OK!");
    } catch (error) {
        console.log("Can not connect to database!", error);
    }
}

module.exports = connetDB
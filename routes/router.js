const express = require('express')
const { getUsuarios, getOneUser, delteUser, createUser, updateUser } = require('../controllers/user.controller')
const router = express.Router()


router.get('/usuarios', getUsuarios)
router.get('/usuario/:id', getOneUser)
router.delete('/deleteUser/:id', delteUser)
router.post('/createUser', createUser)
router.put('/updateUser/:id', updateUser)


module.exports = router
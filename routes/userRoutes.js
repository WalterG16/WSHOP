import express from 'express'
import { login, autentication, registro, autenticationRegistro, recuperacion, cambiarContraseña } from '../controllers/userController.js'

const router = express.Router()

//ROUTING

router.get('/login', login)
router.post('/login', autentication)

router.get('/registro', registro)
router.post('/registro', autenticationRegistro)



export default router

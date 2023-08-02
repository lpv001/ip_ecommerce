import { Router } from 'express'
import { register, login, getuser } from '../controllers/ClientController.js'
import { registerValidator, loginValidator } from '../middleware/validation.js'


const ClientRoute = Router()

ClientRoute.post('/register', registerValidator, register)
ClientRoute.post('/login', loginValidator, login)
ClientRoute.get('/me', getuser)


export default ClientRoute
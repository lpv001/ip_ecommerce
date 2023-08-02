import { Router } from 'express'
import { register, login, getuser, logout } from '../controllers/UserController.js'
import { registerValidator, loginValidator } from '../middleware/validation.js'


const UserRoute = Router()

UserRoute.post('/register', registerValidator, register)
UserRoute.post('/login', loginValidator, login)
UserRoute.get('/logout', logout)

UserRoute.get('/me', getuser)


export default UserRoute
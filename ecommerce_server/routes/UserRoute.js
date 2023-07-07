import { Router } from 'express'
import { register, login, getuser } from '../controllers/UserController.js'
import { registerValidator, loginValidator } from '../middleware/validation.js'


const UserRoute = Router()

UserRoute.post('/register', registerValidator, register)
UserRoute.post('/login', loginValidator, login)

UserRoute.get('/:id', getuser)


export default UserRoute
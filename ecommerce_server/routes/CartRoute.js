import { Router } from 'express'
import { record_user_cart } from '../controllers/CartController.js'


const CartRoute = Router()

CartRoute.post('/record_user_cart', record_user_cart)



export default CartRoute
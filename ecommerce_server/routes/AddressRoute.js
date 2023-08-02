import { Router } from 'express'
import { record_user_shipping_info } from '../controllers/AddressController.js'


const AddressRoute = Router()

AddressRoute.post('/record_user_shipping_info', record_user_shipping_info)



export default AddressRoute
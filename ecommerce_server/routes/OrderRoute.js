import { Router } from 'express'
import { get_all_order, record_user_order, update_order_status, get_order_detail_by_id } from '../controllers/OrderController.js'


const OrderRoute = Router()

OrderRoute.post('/record_user_order', record_user_order)
OrderRoute.get('/get_all_order', get_all_order)
OrderRoute.put('/update_order_status/:id', update_order_status)
OrderRoute.get('/get_order_detail_by_id/:id', get_order_detail_by_id)



export default OrderRoute
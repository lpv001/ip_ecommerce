import { Router } from 'express'
import { create_product, get_all_product, delete_product_by_id } from '../controllers/ProductController.js'

const ProductRoute = Router()

ProductRoute.post('/create_product', create_product)

ProductRoute.get('/get_all_product', get_all_product)

ProductRoute.delete('/delete/:id', delete_product_by_id)


export default ProductRoute
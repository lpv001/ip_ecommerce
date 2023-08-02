import { Router } from 'express'
import { 
    create_product, 
    get_all_product, 
    delete_product_by_id ,
    get_product_by_category,
    get_product_by_id
} from '../controllers/ProductController.js'

const ProductRoute = Router()

ProductRoute.post('/create_product', create_product)

ProductRoute.get('/get_all_product', get_all_product)
ProductRoute.get('/get_product_by_category/:category', get_product_by_category)
ProductRoute.get('/get_product_by_id/:id', get_product_by_id)

ProductRoute.delete('/delete/:id', delete_product_by_id)


export default ProductRoute
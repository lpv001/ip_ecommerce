import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const CartSchema = mongoose.Schema({
    order_id: {
        type: String,
        require: true,
    },
    product_id:{
        type: String,
        require: true,
    },
    quantity:{
        type: String,
        require: true,
    },
    size:{
        type: String,
        require: true,
    },
},{timestamps: true})

export default mongoose.model('cart', CartSchema)
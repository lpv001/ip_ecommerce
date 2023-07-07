import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const ProductSchema = mongoose.Schema({
    product_name: {
        type: String,
        require: true,
    },
    product_price: {
        type: String,
        require: true
    },
    brand:{
        type: String,
        require: true
    },
    image_path:{
        type: String,
        require: true
    },
    product_description:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    }
},{timestamps: true})

export default mongoose.model('product', ProductSchema)
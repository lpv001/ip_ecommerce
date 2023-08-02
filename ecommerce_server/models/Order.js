import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const OrderSchema = mongoose.Schema({
    user_id: {
        type: String,
        require: true,
    },
    isShip:{
        type: Boolean,
        default: false
    }
},{timestamps: true})

export default mongoose.model('order', OrderSchema)
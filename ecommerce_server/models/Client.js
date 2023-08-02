import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const ClientSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
},{timestamps: true})

export default mongoose.model('client', ClientSchema)
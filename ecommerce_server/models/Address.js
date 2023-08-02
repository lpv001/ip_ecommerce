import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const AddressSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true
    },
    type:{
        type: String,
        require: true
    },
    firstname:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    company:{
        type: String,
        require: true
    },
    card:{
        type: String,
        require: true
    },
    code:{
        type: String,
        require: true
    },
    country:{
        type: String,
        require: true
    },
    state:{
        type: String,
        require: true
    },
    zip:{
        type: String,
        require: true
    },
    user_id: {
        type: String,
        require: true
    }
},{timestamps: true})

export default mongoose.model('address', AddressSchema)
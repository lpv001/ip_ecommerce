import express from "express"
import connectDB from "./db.js"
import UserRoute from "./routes/UserRoute.js"
import ProductRoute from "./routes/ProductRoute.js"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from 'cors'
import ClientRoute from "./routes/ClientRoute.js"
import UploadRoute from "./routes/UploadRoute.js"
import AddressRoute from "./routes/AddressRoute.js"
import OrderRoute from "./routes/OrderRoute.js"
import CartRoute from "./routes/CartRoute.js"

import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
connectDB()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(__dirname + '/public'))
app.use(cors({credentials: true, origin: 'http://localhost:5173'}))


app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/v1/user', UserRoute)
app.use('/api/v1/client', ClientRoute)
app.use('/api/v1/product', ProductRoute)
app.use('/api/v1/upload', UploadRoute)
app.use('/api/v1/address', AddressRoute)
app.use('/api/v1/order', OrderRoute)
app.use('/api/v1/cart', CartRoute)

app.listen( 3000, () => {
    console.log("Sever is staring at port 3000")
})
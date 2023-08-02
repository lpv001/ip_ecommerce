import { Router } from "express"
import upload_blogs_image from "../controllers/UploadController.js"

const UploadRoute = Router()

UploadRoute.post('/blogs_image', upload_blogs_image)

export default UploadRoute
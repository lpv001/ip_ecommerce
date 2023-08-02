import ProductModel from '../models/Product.js'

const create_product = async (req, res) => {
    const {
        product_name,
        product_price,
        brand,
        image_path,
        op1,
        op2,
        op3,
        product_description,
        category
    } = req.body

    const newproduct = new ProductModel({
        product_name,
        product_price,
        brand,
        image_path,
        op1,
        op2,
        op3,
        product_description,
        category
    })

    try {
        await newproduct.save()
        return res.status(200).json(newproduct)
    } catch (error) {
        return res.json(error)
    }
    
}

const get_all_product = async (req, res) => {
    try {
        const product = await ProductModel.find({})
        return res.status(200).json(product)
    } catch (error) {
        return res.json(error)
    }
}

const get_product_by_category = async (req, res) => {
    const category = req.params.category
    try {
        const product = await ProductModel.find({category})
        return res.status(200).json(product)
    } catch (error) {
        return res.json(error)
    }
}

const get_product_by_id = async(req, res) => {
    const _id = req.params.id
    try {
        const product = await ProductModel.findOne({_id})
        return res.status(200).json(product)
    } catch (error) {
        return res.json(error)
    }
}

const delete_product_by_id = async (req, res) => {
    const _id = req.params.id
    try {
        await ProductModel.deleteOne({ _id: _id })
        return res.status(200).json({message: "delete succesfully!"})
    } catch (error) {
        return res.json(error)
    }
}

export {
    create_product,
    get_all_product,
    delete_product_by_id,
    get_product_by_category,
    get_product_by_id
}
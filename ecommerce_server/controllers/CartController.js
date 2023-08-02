import CartModel from '../models/Cart.js'

const record_user_cart = async (req, res) => {

    const {
        order_id,
        product_id,
        size,
        quantity
    } = req.body

    const new_info = new CartModel({
        order_id,
        product_id,
        size,
        quantity
    })

    try {
        await new_info.save()
        return res.status(200).json(new_info)
    } catch (error) {
        return res.json(error)
    }

}

export {
    record_user_cart
}
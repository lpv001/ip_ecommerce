import OrderModel from '../models/Order.js'

const record_user_order = async (req, res) => {

    const {
        user_id
    } = req.body

    const new_info = new OrderModel({
        user_id
    })

    try {
        await new_info.save()
        return res.status(200).json(new_info)
    } catch (error) {
        return res.json(error)
    }

}

const get_all_order = async (req, res) => {
    try {
        const order = await OrderModel.find({})
        return res.status(200).json(order)
    } catch (error) {
        return res.json(error)
    }
}

const update_order_status = async (req, res) => {
    try {
        const _id = req.params.id
        const filter = { _id: _id };
        const update = { $set: { isShip: true } };
        const result = await OrderModel.updateOne(filter, update);
        return res.status(200).json(result)
    } catch (error){
        return res.json(error)
    }
}

const get_order_detail_by_id = async (req, res) => {
    try {

        const _id = req.params.id
        const result = await OrderModel.aggregate([
            {
                "$project": {
                  "_id": {
                    "$toString": "$_id"
                  },
                  category_name: 1,
                }
            },
            {
                $lookup: {
                    from: "clients",
                    localField: "user_id",
                    foreignField: "_id",
                    as: "orders"
                }
            }
          ]);
          
        return res.status(200).json(result)

    } catch (error) {
        return res.json(error)
    }
}

export {
    record_user_order,
    get_all_order,
    update_order_status,
    get_order_detail_by_id
}
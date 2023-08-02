import AddressModel from '../models/Address.js'

const record_user_shipping_info = async (req, res) => {

    const {
        email,
        address,
        type,
        firstname,
        lastname,
        company,
        card,
        code,
        country,
        state,
        zip,
        user_id
    } = req.body

    const new_info = new AddressModel({
        email,
        address,
        type,
        firstname,
        lastname,
        company,
        card,
        code,
        country,
        state,
        zip,
        user_id
    })

    try {
        await new_info.save()
        return res.status(200).json(new_info)
    } catch (error) {
        return res.json(error)
    }

}

export {
    record_user_shipping_info
}
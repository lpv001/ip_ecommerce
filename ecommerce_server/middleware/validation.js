import { Validator } from "node-input-validator"

async function registerValidator(req, res, next){
    const validator = new Validator(req.body, {
        email: 'required|email',
        password: 'required|string',
        username: 'required|string'
    })
    const matched = await validator.check();

    if (!matched)
        return res.status(422).json({
            success: false,
            message: validator.errors
        })

    next()
}

async function loginValidator(req, res, next) {
    const validator = new Validator(req.body, {
        email: 'required|email',
        password: 'required|string'
    })

    const matched = await validator.check();

    if (!matched)
        return res.status(422).json({
            success: false,
            message: validator.errors
        })

    next()
}

export {
    registerValidator,
    loginValidator
}
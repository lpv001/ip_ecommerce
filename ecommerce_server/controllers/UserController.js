import UserModel from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const register = async (req, res) => {

    const {
        email,
        password,
        username
    } = req.body

    const hashpassword = await bcrypt.hash(password, "$2a$10$B2o1NNfOuuKYgt8pDDJVfu")

    const newuser = new UserModel({
        email,
        username,
        password: hashpassword
    })

    try {
        await newuser.save()
        return res.status(201).json(newuser)
    } catch (error) {
        return res.json(error)
    }

}

const login = async (req, res) => {
    const {
        email,
        password,
    } = req.body

    try {
        
        const user = await UserModel.findOne({ email })

        if (!user) return res.status(401).json({message: "Unauthentication"})

        const hashpassword = await bcrypt.hash(password, "$2a$10$B2o1NNfOuuKYgt8pDDJVfu")

        if (hashpassword != user.password) return res.status(401).json({message: "Password is not correct !"})

        delete user.password
        const accessToken = getToken(user)

        let embed_data = {
            success: 1,
            id: user._id
        }

        return res.status(200).cookie('accessToken', JSON.stringify(accessToken), {
            sameSite: 'strict',
            path: '/',
            secure: true,
            expires: new Date(new Date().getTime() + 3600 * 1000),
            httpOnly: true
        }).send(embed_data)

    } catch (error) {
        return res.status(400).json(error)
    }

}

const getuser = async (req ,res) => {
    const id = req.params.id
    const cookies = req.cookies
    console.log(cookies)
}

function getToken(user) {
    return jwt.sign({
        data: user,
    },"sfbsd!sad@!dsf#$#", { expiresIn: '60d' })
}

export {
    register,
    login,
    getuser
}
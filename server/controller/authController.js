import userModel from "../model/userModel"
import { createToken } from "../utils/secretToken"
import bcrypt from 'bcrypt'

export async function signup(req, res) {
    try {
        const { name, email, password } = req.body
        const existUser = await userModel.findOne(email)
        if (existUser) return res.json({ status: false, message: 'OOps!...User already exists' })
        const hashPassword = bcrypt.hashSync(password, 12)

        const user = userModel.create({ email, name, password: hashPassword })
        const token = createToken(user._id)
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false
        })

        res.status(201).json({ status: true, message: "User Created Successfully" })
    } catch (error) {
        console.error(error)
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne(email)
        if (!user) return res.json({ status: false, message: "No user found" })

        const auth = bcrypt.compareSync(password, user.password)
        if (!auth) return res.json({ status: false, message: " Invalid Email or Password " })

        const token = createToken(user._id)
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false
        })
        res.status(200).json({ status: true, message: "Login Succes" })
    } catch (error) {
        console.error(error)
    }
}
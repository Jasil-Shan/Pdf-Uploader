import userModel from "../model/userModel.js"
import { createToken } from "../utils/secretToken.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function signup(req, res) {
    try {
        const { lName, fName, email, password } = req.body
        const existUser = await userModel.findOne({ email })

        if (existUser) return res.json({ status: false, message: 'OOps!...User already exists' })
        const hashPassword = bcrypt.hashSync(password, 12)

        const user = await userModel.create({ email, lName, fName, password: hashPassword })
        const token = createToken(user._id)

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true
        })
        return res.status(201).json({ status: true, message: "User Created Successfully", user })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
}


export async function login(req, res) {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })
        if (!user) return res.json({ status: false, message: "No user found" })

        const auth = bcrypt.compareSync(password, user.password)
        if (!auth) return res.json({ status: false, message: " Invalid Email or Password " })

        const token = createToken(user._id)
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true
        })
        return res.status(200).json({ status: true, message: "Login Succes" })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
}


export async function auth(req, res) {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ isAuthenticated: false, user: null });
        }
        const decoded = jwt.verify(token, process.env.TOKEN_KEY)
        console.log(decoded);

        const user = await userModel.findById(decoded.id)
        console.log(user);

        return res.status(200).json({ isAuthenticated: true, user })
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return res.status(401).json({ isAuthenticated: false, user: null });
    }
}
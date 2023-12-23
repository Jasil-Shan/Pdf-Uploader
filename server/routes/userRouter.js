import express from "express"
import { auth, login, signup } from "../controller/authController.js"

const router = express.Router()


router.post('/signup', signup)
router.post('/login', login)


router.get('/auth', auth)


export default router
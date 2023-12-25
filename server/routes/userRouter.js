import express from "express"
import { auth, login, logout, signup } from "../controller/authController.js"
import { getPdf, uploadPdf } from "../controller/pdfController.js"
import multerUpload from "../middlewares/multer.js"
import { verifyUser } from "../middlewares/verifyUser.js"

const router = express.Router()


router.post('/signup', signup)
router.post('/login', login)
router.get('/auth', auth)
router.get('/logout',logout )

router.use(verifyUser)
router.post('/uploadPdf',multerUpload,uploadPdf)
router.get('/getPdf',getPdf)

export default router
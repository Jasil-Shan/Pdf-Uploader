import express from "express"
import cors from 'cors'
import 'dotenv/config.js'
import cookieParser from "cookie-parser"
import { dbConnect } from "./config/dbConfig.js"
import userRouter from './routes/userRouter.js'

const app = express()


dbConnect()

app.use(
    cors({
    }))

app.use(express.json())
app.use(cookieParser())

app.use('/',userRouter)

const {PORT} = process.env
app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
})


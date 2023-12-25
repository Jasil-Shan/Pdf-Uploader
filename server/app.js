import express from "express"
import cors from 'cors'
import 'dotenv/config.js'
import cookieParser from "cookie-parser"
import { dbConnect } from "./config/dbConfig.js"
import userRouter from './routes/userRouter.js'
import ExpressMongoSanitize from "express-mongo-sanitize"

const app = express()


dbConnect()

app.use(
    cors({
        origin: [
            "https://pdf-zone.netlify.app",
            "http://localhost:5000",
        ],
        credentials: true,
    }))

app.use(ExpressMongoSanitize());
app.use(express.json({ limit: '50mb' }))
app.use(cookieParser())
app.use(express.urlencoded({ limit: '150mb', extended: true }))

app.use('/', userRouter)

const { PORT } = process.env
app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
})


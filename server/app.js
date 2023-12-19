import express from "express"
import dbConnect from "./config/dbConfig.js"
import cors from 'cors'
import 'dotenv/config.js'

const app = express()


dbConnect()

app.use(
    cors({
    }))
app.use(express.json())

const {PORT} = process.env

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
})


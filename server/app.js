import express from "express"
import dbConnect from "./config/dbConfig.js"


const app = express()


dbConnect()


const PORT = 3000

app.listen(PORT, () => {
    console.log('Server listening on:' + PORT);
})
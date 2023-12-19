import mongoose from "mongoose";

export default function dbConnect(){
    mongoose.connect("mongodb://127.0.0.1/Pdf-Uploader").then(result=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log("data base error \n"+err)
    })
}

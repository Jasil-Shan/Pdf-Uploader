import mongoose from "mongoose"

const pdfSchema = new mongoose.Schema({
    pdf: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    }
  });

const pdfModel = mongoose.model("pdfData", pdfSchema)

export default pdfModel
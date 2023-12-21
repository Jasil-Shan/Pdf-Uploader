import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Your email address is required"],
      unique: true,
    },
    fName: {
      type: String,
      required: [true, "Your Firstname is required"],
    },
    lName: {
      type: String,
      required: [true, "Your Lastname is required"],
    },
    password: {
      type: String,
      required: [true, "Your password is required"],
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  });

const userModel = mongoose.model("user", userSchema)

export default userModel
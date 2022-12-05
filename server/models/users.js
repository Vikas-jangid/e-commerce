import mongoose from "mongoose";
const schema = mongoose.Schema;

const userSchema = new schema({
    first_name: String,
    last_name: String,
    email: String,
    user_name: String,
    mobile_number: Number,
    password: String,
    confirm_password: String
})

export default new mongoose.model("User", userSchema);

import mongoose from "mongoose";
import { isEmail } from "validator";



const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: 'Email address is required',
            trim: true,
            lowercase: true,
            max: 50,
            unique: true,
            validate: [isEmail, 'invalid email']
        },
        password: {
            type: String,
            required: true,
            min: 8,
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends: {
           type: Array,
           default: [],

        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    }, { timestamps: true });

    const User = mongoose.model("User", UserSchema);
    export default User;
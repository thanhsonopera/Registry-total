import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
}, { timestamps: true });

export const loginInfoModel = mongoose.model('loginInfo', schema);
import { loginInfoModel } from "../models/loginInfo.js";

export const getLoginInfo = async (req, res) => {
    try {
        const user = await loginInfoModel.find();
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }

    // res.send("Hello")
};
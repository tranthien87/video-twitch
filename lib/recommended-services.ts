
import User from "@/models/user";
import getSeft from "./auth-services";

export default async function RecommenedUsers () {
    let userId;
    try {
        const seft = await getSeft();
        userId = seft.userId;
    } catch (error) {
        userId = null;
    }
    let users = [];
    if (userId) {
        users = await User.find({userId: {$ne: userId}}).sort({createAt: 1}).lean();
    } else {
        users = await User.find().sort({createdAt: 1}).lean();
    }

    return users;
    // await new Promise((resolve, reject) => setTimeout(resolve, 500000));
    // return await User.find().sort({createdAt: 1}).lean();
 }
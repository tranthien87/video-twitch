
import User from "@/models/user";
import getSeft from "./auth-services";
import omit from 'lodash/omit';
export default async function RecommenedUsers () {
    let userId;
    try {
        const seft = await getSeft();
        userId = seft.userId;
        console.log('userID', userId);
    } catch (error) {
        userId = null;
    }
    let users = [];
    if (userId) {
        users = await User.find({ userId: { $ne: userId}}).sort({createAt: 1}).lean();
    } else {
        users = await User.find().sort({createAt: 1}).lean();
    }

    return users;
 }
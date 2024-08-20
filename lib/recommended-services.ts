
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
    const recommendedUsers = await User.find({ userId: { $ne: userId}}).lean().sort({createAt: 1});
    return recommendedUsers;
 }
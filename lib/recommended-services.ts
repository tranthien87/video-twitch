
import User from "@/models/user";

export default async function RecommenedUsers () {
    return await User.find().sort({createdAt: 1}).lean();
 }
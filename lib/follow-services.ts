import { currentUser } from "@clerk/nextjs/server"
import getSeft from "./auth-services";
import user from "@/models/user";
import follow from "@/models/follow";


export const isFollowingUser = async (id: string) => {
   try {
    const seft = await getSeft();
    const anotherUser = await user.findOne({ userId: id});
    if(!anotherUser) {
        throw new Error("User not found")
    }
    if(anotherUser.userId === id) {
        return true;
    }

    const existingFollow = await follow.find({
        followerId: seft.userId ,
        followingId: anotherUser.userId
    })

    return !!existingFollow;


   } catch (error) {
     return false;
   }

}
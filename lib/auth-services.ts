import User from "@/models/user";
import { currentUser } from "@clerk/nextjs/server";

export default async function getSeft () {
   const seft = await currentUser();
   if (!seft || !seft.username) {
        throw new Error('Unauthorized')
   }

   const foundUser = await User.findOne({userId: seft.id});
   if (!foundUser) {
    throw new Error('User not found');
   }
    return foundUser;
}
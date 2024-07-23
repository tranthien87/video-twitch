import { Types } from "mongoose"

export interface User {
    _id:  Types.ObjectId,
    userId: string,
    userName: string,
    imageUrl: string,
    externalUserId: string,
    bio?: string
}
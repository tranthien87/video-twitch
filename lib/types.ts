import { Types } from "mongoose"

export interface User {
    _id: Types.ObjectId,
    userId: string,
    userName: string,
    imageUrl: string,
    following: String[],
    followedBy: String[],
    externalUserId: string,
    bio?: string
}
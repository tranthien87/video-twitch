import  { Schema, model, models } from "mongoose";
import {User} from "@/lib/types";

const COLLECTION_NAME = 'Users'
const DOCUMENT_NAME = 'User'

const UserSchema = new Schema<User>({
    userId: {type: String, require: true},
    userName: { type: String, require: true},
    imageUrl: {type: String, require: true},
    externalUserId: String,
    bio: String
}, {
    timestamps: true,
    collection: COLLECTION_NAME,
})


export default models.User || model<User>(DOCUMENT_NAME, UserSchema);
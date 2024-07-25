import { model, models, Schema } from "mongoose";
import { uuid } from 'uuidv4';
const COLLECTION_NAME="Follows";
const DOCUMENT_NAME="Follow";

const FollowSchema = new Schema({
    _id: {
        type: String,
        default: () => uuid()
      },
    followerId: {type: String, require: true},
    follower: {type: String, require: true, ref: "User"}, // reference userId of User model
    followingId: {type: String, require: true},
    following: {type: String, require: true, ref: "User"},// reference userId of User model
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})

export default models.Follow || model( DOCUMENT_NAME, FollowSchema)


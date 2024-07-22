import mongoose from "mongoose";

let isConnected = false;
let connect_url = process.env.MONGO_URI;
if(!connect_url) {
    throw new Error('Connect string database error !!!')
}
const connectDB = async () => {
    if (isConnected) {
        console.log("Already connected to DB");
        return;
    }

   try {
    await mongoose.connect(connect_url, {
        dbName: "VideoTwitch"
    })
    console.log('Mongodb connect successfull!!!');
    isConnected = true;
   } catch (error) {
    console.error(error)
   }
}
export default connectDB;
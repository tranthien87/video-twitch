import mongoose from "mongoose";
import Joi from "joi"

const connectUrlSchema = Joi.string().uri().required();

let connection;

const connectDB = async () => {

    if (connection) {
        console.log("Already connected to DB");
        return connection;
    }

    const connectUrl = process.env.MONGO_URI;
    try {
        await connectUrlSchema.validate(connectUrl);
      } catch (error) {
        throw new Error(`Invalid MongoDB connection string: ${error.message}`);
      }

   try {
    connection = await mongoose.connect(connectUrl, {
        dbName: process.env.MONGO_DB_NAME || "VideoTwitch",
    })
    console.log('Mongodb connect successfull!!!');
    return connection;
   } catch (error) {
    console.error(error);
    throw error; 
   }
}
export default connectDB;
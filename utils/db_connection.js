import mongoose from "mongoose";

export default async function dbConnection() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.DB_CONNECT);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
}

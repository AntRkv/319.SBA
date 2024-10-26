import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.mongoURI;

export default async function connectDB() {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected succes..");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB Connection Error:");
    console.error(err);
  }
};

export default db;
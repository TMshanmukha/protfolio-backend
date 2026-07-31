import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async () => {
    try{
        console.log("MONGO_URL exists:", !!process.env.MONGO_URL);
        console.log("MONGO_URL:", process.env.MONGO_URL?.substring(0, 25));
        await connect(process.env.MONGO_URL)

        console.log("MongoDB connected");
    }catch(err){
        console.log("Connection Error",err);
    }
}

export default db;
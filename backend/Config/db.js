import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async () => {
    try{
        await connect(process.env.MONGO_URL)

        console.log("MongoDB connected");
    }catch(err){
        console.log("Connection Error",err);
    }
}

export default db;
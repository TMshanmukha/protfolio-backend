import { connect } from "mongoose";

const db = async () => {
    try{
        await connect("mongodb://127.0.0.1:27017/portfolioDB")

        console.log("MongoDB connected");
    }catch(err){
        console.log("Connection Error",err);
    }
}

export default db;
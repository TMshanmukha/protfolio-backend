import { connect } from "mongoose";

const db = async () => {
    try{
        console.log("Db connecting...");
        await connect(process.env.MONGO_URL);

        console.log("MongoDB connected");
    }catch(err){
        console.log("Connection Error",err);
    }
}

export default db;
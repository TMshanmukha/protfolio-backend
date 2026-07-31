import { connect } from "mongoose";

const db = async () => {
    try{
<<<<<<< HEAD
        await connect("mongodb://127.0.0.1:27017/portfolioDB")
=======
        console.log("Db connecting...");
        await connect(process.env.MONGO_URL);
>>>>>>> 8bd816171d7d467a7565a961025330ef063ef3c9

        console.log("MongoDB connected");
    }catch(err){
        console.log("Connection Error",err);
    }
}

export default db;
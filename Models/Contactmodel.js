
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    }
})

//contact is the collection name, mongo db automatically create the contacts collection

export default mongoose.model("Contact",contactSchema);
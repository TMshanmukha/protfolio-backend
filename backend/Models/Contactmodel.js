<<<<<<< HEAD
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    message: {
        type: String,
        required: true,
    },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
=======

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
>>>>>>> 8bd816171d7d467a7565a961025330ef063ef3c9

import Contact from "../Models/Contactmodel.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMessage = async (req, res) => {

    try {

        const { name, email, message } = req.body;

        console.log("Saving to DB");

        const newContact = new Contact({
            name,
            email,
            message
        });

        await newContact.save();

        console.log("Saved Successfully");

        console.log("Sending Email");

        const data = await resend.emails.send({

            from: "shanmu547@gmail.com",

            to: "shanmu547@gmail.com",

            subject: "Portfolio Contact Message",

            text: `
Name: ${name}
Email: ${email}
Message: ${message}
            `
        });

        console.log(data);

        return res.status(200).json({
            message: "Success"
        });

    }

    catch(error){

        console.log(error);

        return res.status(500).json({
            error: error.message
        });
    }
};

export { sendMessage };
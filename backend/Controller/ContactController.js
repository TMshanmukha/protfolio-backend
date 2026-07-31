import Contact from "../Models/Contactmodel.js";
import { Resend } from "resend";

<<<<<<< HEAD

export const sendMessage = async (req, res) => {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);   
        console.log("1. Request received");

        const { name, email, message } = req.body;
        console.log("2. Body:", req.body);
=======
const resend = new Resend(process.env.RESEND_API_KEY);

const sendMessage = async (req, res) => {

    try {

        const { name, email, message } = req.body;

        console.log("Saving to DB");
>>>>>>> 8bd816171d7d467a7565a961025330ef063ef3c9

        const newContact = new Contact({
            name,
            email,
            message
        });

<<<<<<< HEAD
        console.log("3. Saving to MongoDB...");
        await newContact.save();
        console.log("4. MongoDB save successful");

        console.log("5. Sending email...");
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `New Portfolio Contact from ${name}`,
            html: `<h1>${message}</h1>`
        });

        console.log("6. Resend response:", data);
        console.log("7. Resend error:", error);

        return res.status(200).json({ success: true });

    } catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({
            message: err.message
        });
    }
};
=======
        await newContact.save();

        console.log("Saved Successfully");

        console.log("Sending Email");

        const data = await resend.emails.send({

            from: "onboarding@resend.dev",

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
>>>>>>> 8bd816171d7d467a7565a961025330ef063ef3c9

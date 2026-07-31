import Contact from "../Models/Contactmodel.js";
import { Resend } from "resend";


export const sendMessage = async (req, res) => {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);   
        console.log("1. Request received");

        const { name, email, message } = req.body;
        console.log("2. Body:", req.body);

        const newContact = new Contact({
            name,
            email,
            message
        });

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

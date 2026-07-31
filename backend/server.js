import express, { json } from 'express';
import cors from 'cors';

import dotenv from "dotenv";
dotenv.config();
<<<<<<< HEAD
console.log("ENV KEY:", process.env.RESEND_API_KEY);
=======
>>>>>>> 8bd816171d7d467a7565a961025330ef063ef3c9
const app = express();

const allowUrl = {
    origin: "http://10.135.210.209:5173"
};

import connectDB from "./Config/db.js";

import contactRoutes from "./routes/ContactRoutes.js";

app.use(cors());
app.use(json());
connectDB();

<<<<<<< HEAD
app.use("/", contactRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server is listening in 8080 port");
=======
app.use("/",contactRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT,"0.0.0.0",() => {
    console.log(`Server is listening on ${PORT} port`);
>>>>>>> 8bd816171d7d467a7565a961025330ef063ef3c9
    console.log("Server is ready to accept from any device");
});


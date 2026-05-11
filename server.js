import express, { json } from 'express';
import cors from 'cors';

import dotenv from "dotenv";
dotenv.config();
const app = express();

const allowUrl = {
    origin: "http://10.135.210.209:5173"
};

import connectDB from "./Config/db.js";

import contactRoutes from "./routes/ContactRoutes.js";

app.use(cors());
app.use(json());
connectDB();

app.use("/",contactRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT,"0.0.0.0",() => {
    console.log(`Server is listening on ${PORT} port`);
    console.log("Server is ready to accept from any device");
});


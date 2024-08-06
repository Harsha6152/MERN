import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookmodels.js';
import booksroutes from './routes/booksroutes.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
//app.use(
   // cors({
     //   origin: 'http://localhost:3000',
       // methods: ['GET', 'POST', 'PUT', 'DELETE'],
        //allowedHeaders: ['Content-Type'],
    //})
//);
app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send("welcome to mern stack tutorial");
});

app.use('/books', booksroutes);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(PORT, "App is listening to port: ${PORT}");
        });
    })
    .catch((error) => {
        console.log(error);

    });
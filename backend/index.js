import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRouter from "./Routes/booksRoute.js"
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const db_password = process.env.db_password;

//middlewares
app.use(express.json());
app.use(cors());

// Mongodb connection 
mongoose.connect(`mongodb+srv://ch3tan5aini:${db_password}@book-store-manager.0khle.mongodb.net/?retryWrites=true&w=majority&appName=Book-Store-Manager`)
    .then(() => {
        console.log("App is connected to database");
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        })
    }).catch((error) => {
        console.log(`Connection Failed Error: ${error.message}`);
    });

app.use("/books", booksRouter)




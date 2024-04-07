// ol7t98MBKEHlIymn
// sarvadnyaawaghad10

// mongodb+srv://sarvadnyaawaghad10:<password>@cluster0.w7md1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import bodyParser from 'body-parser';
import BlogRouter from "./routes/blog-routes.js";
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/user", router);
app.use("/api/blog", BlogRouter)

mongoose.connect('mongodb+srv://sarvadnyaawaghad10:ol7t98MBKEHlIymn@cluster0.w7md1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() =>app.listen(5000))
.then(() => 
console.log('database connected listenig to 4100'))
.catch((err) => console.log('foun error', err) )


app.listen(4100);

// fpROzx1t7jNucYTj
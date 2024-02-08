import express from "express";
import userRouter from "./routes/user.js";
import urlRouter from "./routes/url.js";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path: "./data/config.env",
});


// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);



// using Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/url",urlRouter);



app.get("/",(req,res)=>{
    res.send("Nice Working");
})

 // Using Error Middleware
 
 app.use(errorMiddleware);

import { authRouter } from './routes/authRoutes.js';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express()


//Middlewares
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true

}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());


import healthcheckRouter from './routes/healthcheckroutes.js'
import { postRouter } from './routes/postRoutes.js';
//Healthcheck routes
app.use("/api/v1/healthcheck",healthcheckRouter)

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/posts',postRouter)

export {app}
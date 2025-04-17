import express from "express";
import cors from "cors";
import CookieParser from "cookieparser";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(CookieParser())


export {app}
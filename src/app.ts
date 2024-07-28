import express from "express";
import cors from "cors";
import {connectDB} from "../db/db";
import {SETTINGS} from "./settings";
import blogsRoutes from "./routers/blogsRoutes";
import postsRoutes from "./routers/postsRoutes";

connectDB()

export const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({version: '1.0'})
})

app.use(express.urlencoded({extended: false}))
app.use(SETTINGS.PATH.BLOGS, blogsRoutes)
app.use(SETTINGS.PATH.POSTS, postsRoutes)
// app.use(SETTINGS.PATH.VIDEOS, videoRoutes)
// app.use(SETTINGS.PATH.TESTING, testingRoutes)

import express from "express";
import BlogsController from "../controllers/blogsController";

const router = express.Router();

router.route('/')
    .get(BlogsController.getBlogs)
    .post(BlogsController.createBlog)

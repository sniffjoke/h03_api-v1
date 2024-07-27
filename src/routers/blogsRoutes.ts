import express from "express";
import BlogsController from "../controllers/blogsController";
import {descriptionBlogValidator, nameBlogValidator, websiteUrlValidator} from "../middlewares/blogsValidators";
import {errorMiddleware} from "../middlewares/errorMiddleware";

const router = express.Router();

router.route('/')
    .get(BlogsController.getBlogs)
    .post(
        nameBlogValidator,
        descriptionBlogValidator,
        websiteUrlValidator,
        errorMiddleware,
        BlogsController.createBlog
    )

export default router;

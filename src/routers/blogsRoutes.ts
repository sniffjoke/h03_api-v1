import express from "express";
import BlogsController from "../controllers/blogsController";
import {
    descriptionBlogValidator, idBlogValidator,
    nameBlogValidator,
    websiteUrlValidator
} from "../middlewares/blogsValidators";
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

router.route('/:id')
    .get(
        idBlogValidator,
        errorMiddleware,
        BlogsController.getBlogById
    )
    .put(
        idBlogValidator,
        nameBlogValidator,
        descriptionBlogValidator,
        websiteUrlValidator,
        errorMiddleware,
        BlogsController.updateBlog
    )
    .delete(
        idBlogValidator,
        errorMiddleware,
        BlogsController.deleteBlog
    )

export default router;

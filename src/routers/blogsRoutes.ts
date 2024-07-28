import express from "express";
import BlogsController from "../controllers/blogsController";
import {
    descriptionBlogValidator, idBlogValidator,
    nameBlogValidator,
    websiteUrlValidator
} from "../middlewares/blogsValidators";
import {errorMiddleware} from "../middlewares/errorMiddleware";
import {authMiddleware} from "../middlewares/authMiddleware";

const router = express.Router();

router.route('/')
    .get(BlogsController.getBlogs)
    .post(
        authMiddleware,
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
        authMiddleware,
        idBlogValidator,
        nameBlogValidator,
        descriptionBlogValidator,
        websiteUrlValidator,
        errorMiddleware,
        BlogsController.updateBlog
    )
    .delete(
        authMiddleware,
        idBlogValidator,
        errorMiddleware,
        BlogsController.deleteBlog
    )

export default router;

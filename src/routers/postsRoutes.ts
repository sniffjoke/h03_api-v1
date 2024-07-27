import express from "express";
import BlogsController from "../controllers/blogsController";
import {descriptionBlogValidator, nameBlogValidator, websiteUrlValidator} from "../middlewares/blogsValidators";
import {errorMiddleware} from "../middlewares/errorMiddleware";
import PostsController from "../controllers/postsController";
import {
    blogIdValidator,
    contentPostValidator,
    shortDescriptionPostValidator,
    titlePostValidator
} from "../middlewares/postsValidators";

const router = express.Router();

router.route('/')
    .get(PostsController.getPosts)
    .post(
        titlePostValidator,
        shortDescriptionPostValidator,
        contentPostValidator,
        errorMiddleware,
        blogIdValidator,
        PostsController.createPost
    )

export default router;

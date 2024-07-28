import express from "express";
import {errorMiddleware} from "../middlewares/errorMiddleware";
import PostsController from "../controllers/postsController";
import {
    blogIdValidator,
    contentPostValidator, idPostValidator,
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
        blogIdValidator,
        errorMiddleware,
        PostsController.createPost
    )

router.route('/:id')
    .get(
        idPostValidator,
        errorMiddleware,
        PostsController.getPostById
    )
    .put(
        idPostValidator,
        titlePostValidator,
        shortDescriptionPostValidator,
        contentPostValidator,
        blogIdValidator,
        errorMiddleware,
        PostsController.updatePost
    )
    .delete(
        idPostValidator,
        errorMiddleware,
        PostsController.deletePost
    )

export default router;

import {Request, Response, NextFunction} from "express";
import postService from "../services/postService";
import {Post} from "../interfaces/post.interface";
import {CreatePostDto} from "../dtos/posts.dto";


class PostsController {
    static getPosts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const posts: Post[] = await postService.getAllPosts()
            res.status(200).json(posts);
        } catch (e) {
            next(e)
        }
    }

    static createPost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const postData: CreatePostDto = await postService.createPost(req.body);
            res.status(201).json(postData);
        } catch (e) {
            next(e)
        }
    }
}

export default PostsController

import {Request, Response, NextFunction} from "express";
import postService from "../services/postService";
import {Post} from "../interfaces/post.interface";
import blogService from "../services/blogService";



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
            const blog = await blogService.findBlogById(req.body.blogId);
            const postData = await postService.createPost({...req.body, blogName: blog?.name});
            res.status(201).json(postData);
        } catch (e) {
            next(e)
        }
    }

    static getPostById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const post = await postService.findPostById(req.params.id);
            res.status(200).json(post);
        } catch (e) {
            next(e)
        }
    }

    static updatePost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await postService.updatePost(req.params.id, req.body);
            res.status(204).send('Обновлено!')
        } catch (e) {
            next(e)
        }
    }

    static deletePost = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await postService.deletePost(req.params.id);
            res.status(204).send('Удалено')
        } catch (e) {
            next(e)
        }
    }
}

export default PostsController

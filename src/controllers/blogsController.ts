import {Request, Response, NextFunction} from "express";
import blogService from "../services/blogService";
import {Blog} from "../interfaces/blog.interface";
import {CreateBlogDto} from "../dtos/blogs.dto";


class BlogsController {
    static getBlogs = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const blogs: Blog[] = await blogService.getAllBlogs()
            res.status(200).json(blogs);
        } catch (e) {
            next(e)
        }
    }

    static createBlog = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const blogData: CreateBlogDto = await blogService.createBlog(req.body);
            res.status(201).json(blogData);
        } catch (e) {
            next(e)
        }
    }
}

export default BlogsController

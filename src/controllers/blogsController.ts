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

    static getBlogById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const blog = await blogService.findBlogById(req.params.id);
            res.status(200).json(blog);
        } catch (e) {
            next(e)
        }
    }

    static updateBlog = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await blogService.updateBlog(req.params.id, req.body);
            res.status(204).send('Обновлено!')
        } catch (e) {
            next(e)
        }
    }

    static deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await blogService.deleteBlog(req.params.id);
            res.status(204).send('Удалено')
        } catch (e) {
            next(e)
        }
    }
}

export default BlogsController

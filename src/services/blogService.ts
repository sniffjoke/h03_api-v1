import {Blog} from "../interfaces/blog.interface";
import {blogModel} from "../models/blogsModel";
import {NextFunction} from "express";
import {CreateBlogDto} from "../dtos/blogs.dto";


class blogService {
    static async getAllBlogs(): Promise<Blog[]> {
        const blogs: Blog[] = await blogModel.find()
        return blogs
    }

    static async createBlog(blogData: CreateBlogDto): Promise<Blog> {
        const createBlogData = await blogModel.create(blogData);
        return createBlogData
    }
}

export default blogService

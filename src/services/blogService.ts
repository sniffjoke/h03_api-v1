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
        const createBlogData: Blog = await blogModel.create(blogData);
        return createBlogData
    }

    static async findBlogById(blogId: string): Promise<Blog> {
        console.log(blogId)
        const blog: any = await blogModel.findOne({_id: blogId})
        return blog
    }

    static async updateBlog(blogId: string, blog: Blog): Promise<Blog> {
        const findedBlog = await this.findBlogById(blogId)
        const updateBlog: any = await blogModel.findByIdAndUpdate( blogId, {...blog})
        return updateBlog
    }
}

export default blogService

import {Blog} from "../interfaces/blog.interface";
import {blogModel} from "../models/blogsModel";
import {CreateBlogDto} from "../dtos/blogs.dto";
import {DeleteResult} from "mongodb";


class blogService {
    static async getAllBlogs(): Promise<Blog[]> {
        const blogs: Blog[] = await blogModel.find()
        return blogs
    }

    static async createBlog(blogData: CreateBlogDto): Promise<Blog> {
        const createBlogData = await blogModel.create(blogData)
        return createBlogData
    }

    static async findBlogById(blogId: string): Promise<Blog | null> {
        const blog = await blogModel.findOne({_id: blogId})
        return blog
    }

    static async updateBlog(blogId: string, blog: Blog): Promise<Blog | null> {
        const findedBlog = await this.findBlogById(blogId)
        const updateBlog = await blogModel.findByIdAndUpdate(blogId, {...blog})
        return updateBlog
    }

    static async deleteBlog(blogId: string): Promise<DeleteResult> {
        const blog = await this.findBlogById(blogId)
        const deleteBlog = await blogModel.deleteOne({_id: blogId})
        return deleteBlog
    }
}

export default blogService

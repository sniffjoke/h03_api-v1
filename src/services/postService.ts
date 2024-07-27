import {Post} from "../interfaces/post.interface";
import {postModel} from "../models/postsModel";
import {NextFunction} from "express";
import {CreateBlogDto} from "../dtos/blogs.dto";


class postService {
    static async getAllPosts(): Promise<Post[]> {
        const posts: Post[] = await postModel.find()
        return posts
    }

    static async createPost(blogData: CreateBlogDto): Promise<Post> {
        const createPostData = await postModel.create(blogData);
        return createPostData
    }
}

export default postService

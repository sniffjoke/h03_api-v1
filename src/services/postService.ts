import {Post} from "../interfaces/post.interface";
import {postModel} from "../models/postsModel";
import {CreateBlogDto} from "../dtos/blogs.dto";
import {blogModel} from "../models/blogsModel";
import { DeleteResult } from "mongodb";


class postService {
    static async getAllPosts(): Promise<Post[]> {
        const posts: Post[] = await postModel.find()
        return posts
    }

    static async createPost(blogData: CreateBlogDto): Promise<Post> {
        const createPostData = await postModel.create(blogData);
        return createPostData
    }

    static async findPostById(postId: string): Promise<Post | null> {
        const post = await postModel.findOne({_id: postId})
        return post
    }

    static async updatePost(postId: string, post: Post): Promise<Post | null> {
        const findedPost  = await this.findPostById(postId)
        const updatePost = await postModel.findByIdAndUpdate( postId, {...post})
        return updatePost
    }

    static async deletePost(postId: string): Promise<DeleteResult> {
        const post = await this.findPostById(postId)
        const deletePost = await blogModel.deleteOne({_id: postId})
        return deletePost
    }
}

export default postService

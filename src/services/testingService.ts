import {blogModel} from "../models/blogsModel";
import {postModel} from "../models/postsModel";


export class testingService {

    static async deleteAll() {
        const deleteBlogs = await blogModel.deleteMany()
        const deletePosts = await postModel.deleteMany()
        return {
            deleteBlogs,
            deletePosts
        }
    }
}

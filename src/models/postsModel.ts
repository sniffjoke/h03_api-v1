import {Schema, Document, model} from "mongoose";
import {Post} from "../interfaces/post.interface";


const postSchema: Schema = new Schema({
        title: {
            type: String,
            required: true,
        },
        shortDescription: {
            type: String,
            required: true
            // default: ''
        },
        content: {
            type: String,
            required: true,
        },
        blogId: {
            type: Schema.Types.ObjectId,
            required: true,
            // default: '',
            ref: "Blog"
        },
        blogName: {
            type: String,
            // required: true
            default: ''
        },
    },
    {
        // timestamps: true,
        timestamps: false,
        versionKey: false,

    }
)

export const postModel = model<Post & Document>('Post', postSchema);

import {Schema, Document, model} from "mongoose";
import {Post} from "../interfaces/post.interface";


const postSchema: Schema = new Schema({
        title: {
            type: String,
            required: true,
        },
        shortDescription: {
            type: String,
            required: [true, 'Please add a text value']
        },
        content: {
            type: String,
            required: true,
        },
        blogId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Blog"
        },
        blogName: {
            type: String,
            required: true
        },
    },
    {
        // timestamps: true,
        timestamps: false,
        versionKey: false,

    }
)

export const postModel = model<Post & Document>('Post', postSchema);

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
        blodId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Blog"
        },
        blogName: {
            type: String,
            required: true,
        },
        isMembership: {
            types: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const blogModel = model<Post & Document>('Post', postSchema);

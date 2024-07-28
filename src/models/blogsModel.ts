import {Schema, Document, model} from "mongoose";
import {Blog} from "../interfaces/blog.interface";


const blogSchema: Schema = new Schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: [true, 'Please add a text value']
        },
        websiteUrl: {
            type: String,
            required: true,
        },
        isMembership: {
            type: Boolean,
            default: false
        }
    },
    {
        versionKey: false
    },
)

export const blogModel = model<Blog & Document>('Blog', blogSchema);



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
        }
    },
    {
        timestamps: true
    }
)

export const blogModel = model<Blog & Document>('Blog', blogSchema);



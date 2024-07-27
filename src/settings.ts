import {config} from "dotenv";

config()

export const SETTINGS = {
    PORT: process.env.PORT || 3003,
    PATH: {
        BLOGS: '/api/blogs',
        TESTING: '/api/testing/all-data',
        MONGODB: process.env.MONGO_URI
    }
}

import * as mongoose from "mongoose";
import {SETTINGS} from "../src/settings";


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(SETTINGS.PATH.MONGODB as string);

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

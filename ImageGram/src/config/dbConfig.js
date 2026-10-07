import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function connectDB() { // Now we call this function in the index.js after the server is started. 
    try{
        await mongoose.connect(DB_URL)
        console.log("Connect with database successfully")
    }
    catch (error){
        console.log("Somethig went wrong with database connection")
        console.log(error)

    }
}
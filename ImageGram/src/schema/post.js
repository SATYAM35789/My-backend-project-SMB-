import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    caption : {
        type : String, 
        required : true,
        minLength : 5,
    },
    image : {
        type : String,
        required : true
    },
    // Every post will be associated with a user. So we will be creating a reference to the user collection.
    user : {
        type : mongoose.Schema.Types.ObjectId, // This will be the id of the user who created the post.
        ref : "User" // This will be the name of the collection we are referencing to. In this case, it is the User collection.
    }
})

const post = mongoose.model("Post", postSchema) // post Colllection

export default post;
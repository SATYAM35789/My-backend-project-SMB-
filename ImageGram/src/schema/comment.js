import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        minlength : 1
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    onModel : {
        type : String,
        required : true,
        enum : ["Post", "Comment"]
    },
    commentableId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : "onModel"
    }, 
    replies : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Comment"
        }
    ],
    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Like"
        }
    ]
},{timestamps : true})

const comment = mongoose.model('Like', commentSchema);

export default comment;

/**
 *  comment1 : 
 *     replies : [
 *         comment2
 *         comment3
 *         comment3 : 
 *             replies : [
 *                   comment 5
 * ]
 *   ]
 * 
 */

//  Interview : Advide -> multiple times company give us problem design the schema to create different different type of schemas and design the database.

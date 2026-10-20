import Comment from "../schema/comment.js";

export const createComment = async (Content, userId, onModel, commentableId) => {
    try {
        const newComment = await Comment.create({Content, userId, onModel, commentableId, likes:[], replies:[]})
        return newComment;
    } catch (error) {
        console.log(error);        
    }
}

export const findCommentById = async (id)=> {
    try {
        const comment = await Comment.findById(id)
        return comment 
    } catch (error) {
        console.log(error);        
    }
}
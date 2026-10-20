import { createComment } from "../repositories/commentRepository.js"
import { findPostById } from "../repositories/postRepository.js"
import { findCommentById } from "../repositories/commentRepository.js"

export const createCommentService = async (Content, userId, onModel, commentableId) => {
    try {
        let parent = await fetchCommentParent(onModel,commentableId)

        if(!parent){
            throw {
                message : `${onModel} not found`
            }
        }

        const newComment = await createComment(Content, userId, onModel, commentableId)

        await addChildCommentToParent(onModel,newComment, parent)

        return newComment
    }
    catch (error) {
        console.log(error);        
    }
}

export const findCommentByIdService = async(id)=>{
    try {
        const comment = await findCommentById(id)
        if(!comment) {
            throw {
                message : "Comment not found",
                status : 404
            }
        }
        return comment
    } catch (error) {
        console.log(error);
    }
}

const addChildCommentToParent = async (onModel, comment, parent) =>{
    try {
        if(onModel == "Post"){
            parent.comments.push(comment._id)
        } else if(onModel == "Comment"){
            parent.replies.push(comment._id)
        }
        await parent.save()
    } catch (error) {
        console.log(error);
        
    }
}

const fetchCommentParent = async (onModel, commentableId) => {
    try {
        let parent;
        if (onModel == "Post") {
            parent = await findPostById(commentableId)
        }
        else if (onModel == "Comment") {
            parent = await findCommentById(commentableId)
        }
        return parent;
    } catch (error) {

    }
}


// 1. Check if posts exists or not
// 2. Create comment Entity
// 3. To add the comment to the post, inside the array of the comments
//  4. Updated post ko save kar lenge
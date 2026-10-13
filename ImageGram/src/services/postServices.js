import { countAllPosts, createPost, deletePostById, findAllPosts, updatePostById } from "../repositories/postRepository.js"

export const createPostService = async(createPostObject) => {
    // See the post schema to see what all fields are required to create a post. 
    const caption = createPostObject.caption?.trim() 
    const image = createPostObject.image
    // const user = createPostObject.userId  add later

    const post = await createPost(caption, image)

    return post

}

export const getAllPostService = async(offset, limit) =>{
    const posts = await findAllPosts(offset, limit)

    // Calculate the total no of posts and total number of pages 
    const totalDocuments = await countAllPosts()

    const totalPages = Math.ceil(totalDocuments/limit)

    return {
        posts, totalPages, totalDocuments
    }
}

export const deletePostService = async(id) => {
    // Call the repository function to delete the post by id
    const response = await deletePostById(id);
    return response 
}

export const updatePostService = async(id, updateObject) => {
    // Call the repository function
    const response = await updatePostById(id, updateObject)
    return response;
}
 










// 1. Take the image of the post and upload on the aws. 
    //2. Get the url of the image from the aws response
    //3. Craete the post with caption and the image url in the DB using repository
    //4. Return the post object






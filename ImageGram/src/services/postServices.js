import { createPost } from "../repositories/postRepository.js"

export const createPostService = async(createPostObject) => {
    // See the post schema to see what all fields are required to create a post. 
    const caption = createPostObject.caption?.trim() 
    const image = createPostObject.image
    // const user = createPostObject.userId  add later

    const post = await createPost(caption, image)

    return post

}








    // 1. Take the image of the post and upload on the aws. 
    //2. Get the url of the image from the aws response
    //3. Craete the post with caption and the image url in the DB using repository
    //4. Return the post object






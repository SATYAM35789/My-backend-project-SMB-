import Post from "../schema/post.js"

export const createPost = async(caption, image, userId)=> { // There is another way also to create it,using constructor we can create the post and then save it. But here we are using the create method of mongoose which is more efficient. 
    try{
        const newPost = await Post.create({caption, image, userId})
        return newPost
    }
    catch(error){
        console.log(error)
    }
}

export const findAllPosts = async()=> {
    try{
        const posts = await Post.find()
        return posts
    }
    catch(error){
        console.log(error)
    }
}

export const findPostById = async(id)=> {
    try{
        const post = await Post.findById(id)
        return post
    }
    catch(error){
        console.log(error)
    }
}

export const deletePostById = async(id)=> {
    try{
        const post = await Post.findByIdAndDelete(id)
        return post
    }
    catch(error){
        console.log(error)
    }
}


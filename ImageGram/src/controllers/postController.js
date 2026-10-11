import { createPostService } from "../services/postServices.js";

export async function createPost(req,res){
    console.log(req.file);    
    
    // Call the service layer here
    const post = await createPostService({
        caption: req.body.caption, 
        image:req.file.location
    })
    return res.json({
        success : true,
        message : "Post created successfully",
        data: post
    })
}
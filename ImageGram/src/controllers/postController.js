import { createPostService, getAllPostService } from "../services/postServices.js";

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

// Creating dummy controller for checking 
export async function getAllPosts(req,res){
   try {
      const limit = req.query.limit || 10
      const offset = req.query.offset || 0

      const paginatedPosts = await getAllPostService(offset,limit)

      return res.status(200).json({
        success : true,
        message : "All posts fetched successfully",
        data : paginatedPosts
      })
   } catch (error) {
      console.log(error);
      return res.status(500).json({
        success : false,
        message : "Internal Server Error"
      })
      
   }
}
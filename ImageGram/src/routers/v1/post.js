// Here all the post related routes will be defined. 
import express from "express"
import { s3uploader } from "../../config/multerConfig.js"
import {createPost, deletePost, getAllPosts, updatePost} from "../../controllers/postController.js"
import {validate} from '../../validators/zodValidators.js'
import {zodPostSchema} from '../../validators/zodPostSchema.js'

const router = express.Router() // router object to modelarize the routes. 


router.post('/', s3uploader.single('image'), validate(zodPostSchema), createPost)

router.get('/', getAllPosts)

router.delete('/:id', deletePost)

router.put('/:id', s3uploader.single('image'), updatePost)

export default router 


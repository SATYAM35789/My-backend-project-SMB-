import express from 'express'
import postRouter from './post.js'
import userRouter from './user.js'

const router = express.Router()

router.use('/posts', postRouter) // If in the remaining url i.e after the /api/v2, we have the url starting with /posts then the request will be farwarded to the postRouter
router.use('/users', userRouter) 

export default router
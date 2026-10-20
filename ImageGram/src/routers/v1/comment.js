import express from 'express'
import { createCommment, getCommentById } from '../../controllers/commentControllers.js'
import {isAuthenticated} from '../../middleware/authMiddleware.js'

const router = express.Router()

router.get('/id',isAuthenticated ,getCommentById);

router.post('/',isAuthenticated,createCommment)

export default router
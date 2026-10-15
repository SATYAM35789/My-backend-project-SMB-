// After /users the remaining part will bw handle here
import express from "express"
import { getProfile, signin, signup } from "../../controllers/userController.js"
import { zodSignupSchema } from "../../validators/zodSignupSchema.js"
import {validate} from "../../validators/zodValidators.js"
import { zodSignInSchema } from "../../validators/zodSigninSchema.js"

const router = express.Router()

router.get('/profile', getProfile)
router.post('/signup', validate(zodSignupSchema), signup)
router.post('/signin', validate(zodSignInSchema),signin)

export default router 
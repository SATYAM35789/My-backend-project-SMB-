import { checkIfUserExists } from "../services/userService.js"
import { verifyJWTToken } from "../utils/jwt.js"

export const isAuthenticated = async (req, res, next) => {
    // Check if jwt is passed in the header 
    const token = req.headers["x-access-token"]

    if(!token){
        return res.status(400).json({
            success : false,
            message : "Token is required"
        })
    }

    // verify the token
    try {
        const response = verifyJWTToken(token)

        const doesUserExist = await checkIfUserExists(response.email)
        if(!doesUserExist) {
            return res.status(404).json({
                success : false,
                message : "user not found"
            })
        }

        req.user = response

        next()
    } catch (error) {
        return res.status(401).json({
            success : false,
            message : "Invalid token"
        })
    }
}

//  Ab ham jaha jaha chahte hai ki sird authenticated user access kar paaye waha is is middleWare ko set kar denge

import { signupUserService } from "../services/userService.js"

export async function getProfile() {
    //  return unimplemented
    return res.status(501).json({
        success: false,
        message: " Not implmented"
    })
}

export async function signup(req, res) {
    try {
        //  call the service layer
        const user = await signupUserService(req.body)
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        })
    } catch (error) {
        console.log(error);
        return res(500).json({
            success : false,
            message : "Internal Server Error"
        })
        
    }
}
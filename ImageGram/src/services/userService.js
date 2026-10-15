import { createUser } from "../repositories/userRepository.js"

export const signupUserService = async(user)=>{
    const newUser = await createUser(user)

    return newUser;
}
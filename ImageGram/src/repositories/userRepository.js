import User from "../schema/user.js"

export const findUserByEmail = async (email) => {
    try{
        // Here we call the ORM method findOne to find the user by email.
        const user = await User.findOne({email})
        return user
    }catch(error){
        console.log(error);   
    }
}

//  We can also create such repository methods for other operations like creating a user, updating a user, deleting a user, etc.

export const findAllUsers = async () => {
    try{
        const users = await User.find() // Returns all the users in array format.
        return users
    }catch(error){
        console.log(error);   
    }
} 
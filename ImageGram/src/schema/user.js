// Here we will be creating the schema defiition for the user. 
import mongoose from "mongoose"

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}\$/

const userSchema = new mongoose.Schema({
   username : {
    type : String, // We can have such type of validation more on the mongoose documentation
    required : true,
    unique : true,
    minLength : 5,
   },
   email : {
    type : String,
    required : true,
    unique : true,
    minLength : 5,
    validate : {
        validator: function(emailvalue) {
        return emailRegex.test(emailvalue);
      },
      message: 'Invalid email format'
    }
   },
   password : {
        type : String, 
        required : true, 
        minLength : 5, 
    }
})

const user = mongoose.model("User", userSchema) // user Colllection

export default user;
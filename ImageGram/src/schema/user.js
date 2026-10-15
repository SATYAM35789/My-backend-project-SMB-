// Here we will be creating the schema defiition for the user. 
import mongoose from "mongoose"
import bcrypt from "bcrypt"

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

userSchema.pre("save", function modifiedPassword(next){
  // Incoming user object access
  const user = this // Object with plain password

  const saltObject = bcrypt.genSaltSync(9)

  // Hash password 
  const hashPassword = bcrypt.hashSync(user.password, saltObject)

  // replace the plain password with hash password
  user.password = hashPassword

  next()
})

const user = mongoose.model("User", userSchema) // user Colllection

export default user;
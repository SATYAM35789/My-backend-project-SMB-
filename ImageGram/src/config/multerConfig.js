import multer from 'multer'
import multers3 from 'multer-s3'
import { s3 } from './awsConfig.js'
import { AWS_BUCKET_NAME } from './serverConfig.js'

export const s3uploader = multer({
    storage : multers3({
        s3 : s3,
        bucket : AWS_BUCKET_NAME,
        // acl : 'public-read',
        key : function (req, file, cb){

            // Vaildating file
            if(!file)
                return cb(new error("File not found"))                

            console.log(file);
                    
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) // to make sure the key is unique and avoid overwriting files with the same name

            cb(null, file.fieldname + '-' + uniqueSuffix + "." + file.mimetype.split("/")[1]) // file.fieldname is the name of the field in the form, e.g., 'image' and file.mimetype.split("/")[1] is the file extension, e.g., 'jpeg', 'png', etc.
        }
         
    })
})
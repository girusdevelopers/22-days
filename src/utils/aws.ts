import {S3Client} from "@aws-sdk/client-s3";


import {
  AWS_ACCESS_KEY_ID,
  AWS_BUCKET_NAME,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
} from "@/config/index";

const Bucket_name =AWS_BUCKET_NAME ;
const Bucket_region = AWS_REGION;
const Bucket_key = AWS_ACCESS_KEY_ID;
const Bucket_access = AWS_SECRET_ACCESS_KEY;
const credentials:{
        Bucket_accessKey: Bucket_key,
        seceretAccess: Bucket_access,
    }
export const s3= new S3Client({
    // credentials:{
    //     Bucket_key,
    //     Bucket_access,
    // },
    ...credentials,
    region : Bucket_region
})



// import multer from 'multer'

// import app from '@/app'

// const storage =multer.memoryStorage()
// export const upload=multer({storage:storage})

// upload.single('image')


// app.post('/api/posts',upload.single('image'),async(req,res)=>{
//     console.log("file", req.file)
//     console.log("req.body",req.body)
//     res.send(`File uploaded successfully`)
// })




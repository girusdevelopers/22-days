import { AWS_BUCKET_NAME } from '@/config';
import AWS from 'aws-sdk';
import { NextFunction, Request, Response } from 'express';

export const home = (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({
      success: true,
      message: 'Hello World!',
    });
  } catch (error) {
    next(error);
  }
};


export const readstream = async (req: Request, res: Response) => {

  const file_key= req.params.key
  const s3 = new AWS.S3();
  const bucketName = AWS_BUCKET_NAME; // Replace with your S3 bucket name
  const objectKey = `uploads/${file_key}`

  const params = {
      Bucket: bucketName,
      Key: objectKey,
  };
try{
  const fileStream = s3.getObject(params).createReadStream();
  // const fileStream = s3.getObject(params);
  // console.log(fileStream)
   fileStream.pipe(res);
  // res.send(fileStream)
}catch(error){
  res.json("key not found")
}
}



// export const CDNreadstream = async (req: Request, res: Response) => {
//   // const file_key = req.params.key;
//   // const cdnUrl = `https://your-cdn-url/${file_key}`; // Replace with your CDN URL
//  const cdnUrl= "https://d1tamfpr2x5y74.cloudfront.net/uploads/7716b30e-50c6-4a65-800b-a67effe05b7c-05fa0274-e6c2-407e-8bb5-6557719321be-%5BiSongs.info%5D06-NeeKosam.mp3"
//   const response = await fetch(cdnUrl);
//   response.pipe(res)
//   // console.log(response)
//   // res.send(response)
//   // try {
//   //   const response = await fetch(cdnUrl);
//   //   if (!response.ok) {
//   //     res.json("key not found");
//   //     return;
//   //   }

//   //   // const fileStream = cdnUrl.createReadStream();
//   //   fileStream.pipe(res);
//   // } catch (error) {
//   //   res.json("key not found");
//   // }
// };

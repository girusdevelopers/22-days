import express from 'express';
const router = express.Router();
import app from '@/app';
import { upload_sucess } from '@/controllers/aws.controller';
// // import {upload} from '@/utils/aws'

// import express from 'express';
import multer from 'multer'

const storage =multer.memoryStorage()
export const upload=multer({storage:storage})

// upload.single('image')

router.post('/posts',upload_sucess)


export default router;
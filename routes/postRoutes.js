import express from 'express';
import userAuth from '../middlewares/userAuth.js';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js';


export const postRouter = express.Router()


postRouter.post('/',userAuth,createPost)
postRouter.get('/',getPosts)
postRouter.get('/:id',getPost)
postRouter.put('/:id',userAuth,updatePost);
postRouter.delete('/:id',userAuth,deletePost);
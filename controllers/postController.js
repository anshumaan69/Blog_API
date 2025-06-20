import postModel from "../models/Post.js";

//
export const createPost =async(req,res)=>{

try {
        const {title,content,tags }= req.body;
        const authorId = req.body.userId;
    
        if(!title||!content){
            return res.status(400).json({success:false,message :"Title and content both are required"})
        }
    
        const newPost = await postModel.create({
            title,
            content,
            tags,
            authorId
        })
        return res.status(201).json({success:true,message:"Post successfully created"})
    
} catch (error) {
    return res.status(400).json({success:false,message:error.message})
    
}

}

//
export const getPosts = async(req,res)=>{
    try {
        const posts = await postModel.find().populate('authorId','name  email')
        return res.status(200).json({ success: true, posts });
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
        
    }
}


export const getPost = async(req,res)=>{
    try {
        const {id} = req.params;
        const post = await postModel.findById(id).populate('authorId','name email')
        if(!post){
            return res.status(404).json({success:false,message:"No such posts exist"})
        }
        return res.status(200).json({success:true,post})
        
    } catch (error) {
        return res.status(500).json ({success:false,message:error.message})
        
    }
}



export const updatePost = async(req,res)=>{
    try {
        const {id} = req.params;
        const {title, content, tags} = req.body;
        const userId = req.body.userId;

        const post = await postModel.findById(id);
        if(!post){
            return res.status(404).json({success:false, message:"Post not found"});
        }

        if(post.authorId.toString() !== userId){
            return res.status(403).json({success:false, message:"Not authorised to update this post"});
        }

  
        if(title) post.title = title;
        if(content) post.content = content;
        if(tags) post.tags = tags;

        await post.save();
        return res.status(200).json({success:true, post});
        
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}


export const deletePost = async(req,res)=>{
    try {
        const {id} = req.params;
        const userId=req.body.userId;



        const post = await postModel.findById(id);
        if(!post){
            return (res.status(404).json({success:false,message:"Post not found"}))
        }

        if(post.authorId.toString()!==userId){
            return(res.status(403).json({success:false,message:"Not authorised to delete this post"}))
        }

        
        await post.deleteOne();
        return res.status(200).json({success:true,post})
        
    } catch (error) {
         return res.status(500).json ({success:false,message:error.message})
        
    }
}
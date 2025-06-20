import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true,
        trim: true
    },
    content:{
        type: String,
        required:true
    },
    tags:[{
        type: String,
        lowercase: true,
        trim:true
    }],
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }}
    ,{
        timestamps:true
    }
)

const postModel =mongoose.model('Post',postSchema)
export default postModel

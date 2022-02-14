import { text } from 'express';
import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:'String',
        required:true,
    },
    password:{
        type:'String',
        minlength:5,
        required:true,
    }
    
})

const UserModel= mongoose.model('userprofile',userSchema )

export default UserModel;
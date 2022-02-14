import mongoose from 'mongoose'
const saveAddressSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,

    },

    phone:{
        type:Number,
        required:true,
    }
})
const saveAddressModel=mongoose.model('useraddress',saveAddressSchema)
export default saveAddressModel;
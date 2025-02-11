import mongoose from "mongoose"

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        min:0

    },
    category:{
        type:String,
        required:true,
        enum:["Appetizers", "Main Course", "Desserts", "Beverages"]
    },
    isAvailable:{
        type:Boolean,
        default:true
    },
    imageUrl:{
        type:String,
        trim:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const MenuItem = mongoose.model("MenuItem",menuSchema)

export default MenuItem
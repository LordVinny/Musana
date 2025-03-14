const mongoose=require('mongoose')

const userschema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please enter your name"]
    },
        email:{
            type:String,
            required:[true,"Please enter your email"]
        },
        message:{
            type:String,
            require:[true,"Please enter message"]
        }
    
    },
    {
        timestamps:true
    }
)

const user=mongoose.model('user',userschema);
module.exports=user;    
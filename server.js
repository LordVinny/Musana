const express=require('express')
const mongoose=require('mongoose')
const user=require('./models/usermodel')
const app=express()

app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send('Hello byron ')
})

app.get('/users',async(req,res) =>{
    try{
        const users=await user.find({});
        res.status(200).json(users)
    }catch (error){
        res.status(500).json({message:error.message})
    }
})

app.post('/user',async(req,res)=>{
    try {
        const User=await user.create(req.body)
        res.status(200).json(User);
    }catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})
mongoose.
connect('mongodb+srv://byronr:opensesame@byronap.wh4yw.mongodb.net/SPA?retryWrites=true&w=majority&appName=ByronAP')
.then(()=>{
    console.log('connected to Mongo')
    app.listen(3000,()=>{
    console.log('Running on 3000')
    })
}).catch((error)=>{
    console.log(error)
})
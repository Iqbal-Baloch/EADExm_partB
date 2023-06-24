const express = require("express"); 
const mongoose = require("mongoose"); 

const app = express() ;
app.use(express.json()); 
app.use(express.urlencoded) ;
mongoose.connect("mongodb://127.0.0.1:27017/Recipe").then(()=>{
    console.log("connected to database"); 
}).catch(err=>{
    console.log(err) ;
})

const recepieSchema = mongoose.Schema({
    title: String, 
    description: String,
    ingredients: Array,
    instruction: String,
    image: {
        type: Buffer,
        required: false,
    }
})
const Recipe = mongoose.model("recepies", recepieSchema); 

app.post("/recepie/new", (req, res)=>{
    console.log(res.body);
    const data = new Recipe(req.body) ;
    data.save().then(item=>{
        res.status(200).json({created: true}) ;
    }).catch(err =>{
        res.status(300).json({created: false}) ;
    })
})



app.listen(5000, ()=>{
    console.log("server starts listening");
})
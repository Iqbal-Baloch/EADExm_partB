const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser")
const app = express() ;
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.urlencoded) ;
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

// crud operations

app.post("/recepie/new", (req, res)=>{
    console.log("hello")
    console.log(res.body);
    const data = new Recipe(req.body) ;
    data.save().then(item=>{
        res.status(200).json({created: true}) ;
    }).catch(err =>{
        res.status(300).json({created: false}) ;
    })
})

app.get("/recepies", async (req, res)=>{
    const recepies = await Recipe.find() ;
    res.json(recepies) ;
})

app.get("/recepies/:id", async (req, res) =>{
    const recepie = await Recipe.findById(req?.params?.id) ;
    res.json(recepie) ;
})
app.delete("/recepies/delete/:id", async (req, res) =>{
    try{
        const recepie = await Recipe.findByIdAndRemove(req?.params?.id) ;
        res.json({removed: true}) ;
    }catch(err){
        res.json({removed: false}) ;
    }
})



app.listen(5000, ()=>{
    console.log("server starts listening");
})
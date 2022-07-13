
const express = require("express");
const hbs = require("hbs")
const path = require("path")
const app = express();

//public static path

const staticpath = path.join(__dirname, "../public");
const temp_path = path.join(__dirname, "../templets/views");
const partials_path  = path.join(__dirname, "../templets/partials");

// const javascript= path.join(__dirname, "../public/js/main.js");


app.set('view engine', 'hbs')
app.set("views",temp_path )
// app.set("views", javascript)
app.use(express.static(staticpath));
hbs.registerPartials(partials_path)


//routing
app.get("", (req,res)=>{
    res.render("index")
})

app.get("/about", (req,res)=>{
    res.render("about")
})
app.get("/weather", (req,res)=>{
    res.render("weather")
})

app.get("*", (req,res)=>{
    res.render("404err")
})


app.listen(8000,(req,res)=>{
    console.log("Server Created of 8000");
})
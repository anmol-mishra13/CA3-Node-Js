const express=require("express");
const app = express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT || 8000;
//built in middleware
const templatePath=path.join(__dirname,"../Templates/views");
const partialsPath=path.join(__dirname,"../Templates/Partials");

// to set the view engine
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath)

//mention your engine route
app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render("about");
})

app.listen(port,()=>{
    console.log(`listening the port at ${port}`);
});
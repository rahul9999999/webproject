const express= require('express')
const app= express();
const port=8000;
const path =require('path')
const hbs =require('hbs')

const static_path=path.join(__dirname,"../public");
const view_path= path.join(__dirname,"../templates/views");
const partials_path= path.join(__dirname,"../templates/partials");


console.log(view_path)
app.set('view engine','hbs');
app.set("views",view_path)
hbs.registerPartials(partials_path)

app.use(express.static(static_path));

app.get("/",(req,res)=>{
    res.render('index')

})
app.get("/about",(req,res)=>{
    res.render('about')

})
app.get("/weather",(req,res)=>{
    res.render('weather')
    
})
app.get("*",(req,res)=>{
    res.render('404error',{
        errormsg:'Opps! Page Not Found'
    })

})
app.listen(port,()=>{

    console.log(`listening at ${port}`)
})
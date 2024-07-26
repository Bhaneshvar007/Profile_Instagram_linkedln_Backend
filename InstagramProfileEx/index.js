const { log } = require("console");
const express = require("express");
const path = require("path"); 
const app = express();
const InstaData = require("./Data.json");

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,  "/views"));
// app.use(express.static("public"))  // Sort way
app.use(express.static(path.join(__dirname,  "/public")));



app.get("/instagram/:user" , (req , res)=>{
    let {user} = req.params;
    const data = InstaData[user]

    if(data) res.render('Instagram', {data});
    else res.render('Error');
});

app.listen(3000 , ()=>{
    console.log("server redy");
})
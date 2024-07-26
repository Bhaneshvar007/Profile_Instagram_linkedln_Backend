const express = require("express");
const app = express();

const path = require("path");

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,  "/views"));
app.use(express.static(path.join(__dirname,  "/public")));

app.get("/reg" , (req,res)=>{
    let {username , email,password,fname,lname,phone} = req.query;

    const obj = {
        "username" : username,
        "email" : email,
        "pass" : password,
        "fname" : fname,
        "lname" : lname,
        "phone" : phone
    }
    // res.send(`GetRes ${obj.email}`)
    res.render('output' , {obj})
})

app.listen(3000 , ()=>{
    console.log("Server Started");
})
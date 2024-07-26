const { log } = require("console");
const express = require("express");
const path = require("path"); 
const app = express();
const LikedData = require("./Data.json");

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,  "/views"));
app.use(express.static(path.join(__dirname,  "/public")));
 
 
app.get('/Linkedln/:userName', (req, res) => {
    let {userName} = req.params;
    const data = LikedData[userName];
    if(data) res.render('Linkedln' , {data});
    else res.render('Error');
});
 

app.listen(4000 , ()=>{
    console.log("Server Started");
})
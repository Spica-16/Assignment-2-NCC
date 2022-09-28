const express = require("express");
const http= require("http");
const app = express();

app.get("",(req,res)=>{
    res.send(
        "<h1>Fast Food Shop</h1><p>This is my shop web page.<br> Menu link is:<i><b> localhost:8080/menu<b></i></p> "
        );
});

app.get("/menu",(req,res)=>{
    res.send(
        "<h2>Available Foods & Drinks List</h2> <p> <li>Cheese Burger</li> <li>Potato Fried</li> <br><br> </ul> <li>Coca cola</li><li>Lemon Tea</li></p>"
    );
});

app.listen(8080,()=>{
    console.log("Server will start at port: 8080");
});
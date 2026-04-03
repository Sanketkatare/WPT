// explore the programs which is demonstrate in lecture

// 1) using express js create rest api for product 
// which contains product details 

// "prodid":1,"ProductName":"Laird","price":2000

// create product.json file which contains at least 5 product 

// then create multiple route

// GET  / ------------ display all products 
// GET /:id ---------- display prodcut with id 
// POST  /add ---------------  add product using param
// POST /insert ------------  add product using body data 
// DELETE /:id  -------------- Delete particular product 

var express = require("express");
var app = express();
var fs = require("fs");

app.get("/", function (req,res))
{
    fs.readFile(__dirname + "/product.json", "utf8", function (err, data) {
    if (err)
    {
        res.status(500).send("Error reading file");
    }
    else {
        res.send(data);
    }
    })
}
app.get("/:id", function (req, res))
{
    fs.readFile(__dirname + "/product.json", "utf8", function (err, data) {
        if (err)
        {
            res.status(500).send("Error reading file");
        }
        else {
            var products = JSON.parse(data);
            var product = products["prod" + req.params.id];
            res.send(JSON.stringify(product));
        }
}
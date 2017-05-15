var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var mongoose = require("mongoose");


var Stock =  require("./model/stock.js");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("static"));

mongoose.connect('mongodb://root:123@ds137801.mlab.com:37801/node', (err, database) => {
  if (err) return console.log(err);

  app.listen(2998, () => {
    console.log('listening on 3000')
  });
});

app.get("/stocks" , function(req,res){
   Stock.find({} , function(err, stocks){
     if (err) console.log(err);

     res.send(stocks);
   });
});

app.post("/oneStock", function(req,res){
  var myId = req.body.id;
  Stock.findOne({ id: myId } , function(err,rest){
    if(err) console.log(err);
    res.send(rest);
    console.log(rest);
  });

});

app.post("/createStock" , function(req , res){
   var stock = new Stock({
     name: req.body.name,
     symbol: req.body.symbol,
     price: req.body.price,
     date: req.body.date
   });

   stock.save(function( err){
     if (err) console.log(err);
     else {
       console.log("Created");
     }
     res.send(stock);
   });
});

app.put("/updateStock",  function(req , res){

  Stock.findOne({ id: req.body.id } , function(err,resp){

     if(err) console.log(err);

    if(req.body.name != null) resp.name = req.body.name;
    if(req.body.symbol != null) resp.symbol = req.body.symbol;
    if(req.body.price != null) resp.price = req.body.price;
    if(req.body.date != null) resp.date = req.body.date;

    resp.save(function(err){
      if (err) console.log(err);

      res.send(resp);
    });

   });
});

app.delete("/deleteStock" , function(req , res){

  Stock.findOne({id: req.body.id } , function(err , resp){

    if(err) console.log(err);

    resp.remove();

    res.send("Nice");


  });

});

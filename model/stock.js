var mongoose = require("mongoose");

var stockSchema = mongoose.Schema({
  name: {type: String},
  symbol: {type: String},
  price: {type:String},
  date: {type: Date}
});

module.exports = mongoose.model("stocks" , stockSchema );

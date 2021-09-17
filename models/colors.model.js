

const { Schema, model } = require("mongoose");

const colorSchema = new Schema({
  color:String,
  img:String
  
  
},{


  timestamps: true
})




const Color = model("Color", colorSchema);

module.exports = Color;

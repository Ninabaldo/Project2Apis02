const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/users.model");
const Api = require("../services/ApiHandler");
const ColorAPI = new Api()
const randomColor = require('randomcolor'); 



router.get('/',(req, res)=>{
    let colors = randomColor({count:21})
   colors = colors.map ((color)=>{
    return color.substring (1)      })
    let schemeArray =[]

    colors.forEach((color)=>{ 
      ColorAPI
    .getColor(color.toString()) 
    .then((result) => { console.log(result.data.seed.hex.value)
        schemeArray.push({image:result.data.image.bare, hex:result.data.seed.hex.clean})
        if(schemeArray.length === 21 ){
         //res.send(result)
          res.render("index", {schemeArray} )
        } 
    })
    .catch(err => console.log(err));
     
    })
    
})



router.get("/scheme/:color",(req, res)=>{
    console.log(res)
   const gradient = req.params.color 
   ColorAPI
   .getGradientScheme(gradient)
   .then((scheme)=>{
       res.render("scheme", {scheme:scheme.data})
       //res.send(scheme.data)
   


   })
   .catch(err => console.log(err));
})








module.exports = router;





















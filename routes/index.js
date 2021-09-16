const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");
const Api = require("../services/ApiHandler");
const ColorAPI = new Api()
const randomColor = require('randomcolor'); 


router.get('/',(req, res)=>{
    let colors = randomColor({count:40})
    let colors = randomColor({count:53})
   colors = colors.map ((color)=>{
    return color.substring (1)      })
    let schemeArray =[]

    colors.forEach((color)=>{ 
      ColorAPI
    .getColorScheme(color.toString()) 
    .then((result) => { console.log(result.data.seed.hex.value)
        schemeArray.push({image:result.data.image.bare, hex:result.data.seed.hex.value})
        if(schemeArray.length === 53 ){
         //res.send(result)
          res.render("index", {schemeArray} )
        } 
    })
    .catch(err => console.log(err));
     
    })
    
    
    
})



router.post("/add-favorite", isLoggedIn ,(req, res) =>{
const query = { hex, rgb, image } = req.body
const idToCheck = req.body.id;
    Color.find({id: idToCheck})
	.then (colArray => {
	
		if (colrray.length === 0) {
            Color
                .create(query)
                .then(result => {
                  User
                    .findByIdAndUpdate(req.user._id,{$push : {favorites : result._id}})
                    .then(()=>{
                        res.redirect("/")
                    })
                })
                .catch(err => console.log(err))
        } else {
			User
            .findById(req.user._id)
            .then((user)=>{
                if (!user.favorites.includes(colArray[0]._id)){
                    User
                    .findByIdAndUpdate(req.user._id,{$push : {favorites : charArray[0]._id}})
                    .then(()=>{
                        res.redirect("/")
                    })
                }else{res.redirect("/")}
            })
            .catch((err)=>{
            console.log(err)
            })
            
            
            
		}
	}) 
})


module.exports = router;





















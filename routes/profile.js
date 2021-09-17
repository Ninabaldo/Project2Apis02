
const router = require("express").Router();
const Color= require("../models/colors.model");
const User= require("../models/users.model");
const isLoggedIn= require("../middleware/isLoggedIn");


/* ADD TO FAVOURITE IN YOUR PROFILE PAGE */
router.post("/add-favourite", isLoggedIn, (req, res, next) => { 
  const {color,img}= req.body
  Color.create({color:color.toString(),img})
  .then((color)=>{
    User
    .findByIdAndUpdate(req.user._id,{$push : {favourites : color._id}})
    .then(()=>{
        res.redirect("/auth/profile")
    })
  })
  .catch((error)=>{
  console.log(error)
  })

  });

/* DELATE FAVOURITE */
  router.post("/delete-favourite",isLoggedIn,(req,res,next)=>{
    //const id = req.body.id
    const {id} = req.body
    //console.log(req.body)
    
    
      User
     .findByIdAndUpdate(req.user._id,{$pull : {favourites :id}})
     .then(()=>{
      res.redirect("/auth/profile")
     })
     .catch(err => 
      console.log(err))
    
   
})
  
  module.exports = router;
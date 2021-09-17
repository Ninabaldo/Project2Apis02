
const router = require("express").Router();
const Color= require("../models/Color.model");
const User= require("../models/User.model");
const isLoggedIn= require("../middleware/isLoggedIn");
/* GET profile page */
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
  
  module.exports = router;
const express = require("express");
const passport = require("passport");
const validator = require('validator')
const User = require("../models/user");

const router = express.Router();



router.get("/signup", (req, res, next) => {
  let message = req.flash('error');
  if(message.length > 0){
    message = message[0]
  }else{
    message = null;
  }
  res.render("user/signup" ,{
    errorMessage: message,
    isAuthenticated: false
  });
});

router.get("/signin", (req, res, next) => {
  let message = req.flash('error')
  if(message.length > 0){
    message = message[0];
  }else{
    message = null;
  }
  res.render("user/signin",{
    errorMessage: message,
    isAuthenticated: false
   });
});

router.post("/signup", async(req, res)=>{
  const { email, password, name} = req.body;
  if(!email || !password || !name){
     req.flash('error', 'Please provide all informations!')
     return res.redirect('/user/signup')
  }
  if(password.length < 6){
    req.flash('error', 'Password must be 6 characters')
    return res.redirect('/user/signup')
  }
  User.findOne({email: email}, (err, user)=>{
    if(user){
      req.flash('error','Email is already in use!')
    }else{
      const newUser = new User({
        email,
        password,
        name
      })
      newUser.save((err, user) => {
        req.flash('success_msg', 'You are successfully Registered')
        console.log(user);
        res.redirect('/user/signin')
      })
    }
  })
})

router.post("/signin", async(req,res,next)=>{
  const { email, password } = req.body; 
  await User.findOne({email: email},(err, user)=>{
    if(!user){
      req.flash('error','E-mail is not registered!')
      return res.redirect('/user/signin')
    } 
    if (!user.validPassword(password)) {
      console.log("password is incorrect");
      req.flash('error','Password is Incorrect!')
      return res.redirect("/user/signin");
    }

    req.session.isLoggedIn = true;
    req.session.user = user;
    console.log(user);
    return req.session.save((err)=>{
      console.log(err);
      res.redirect('/')
    })
  })
});



router.get("/logout", (req, res, next) => {
  req.session.destroy((err)=>{
    console.log(err);
    res.redirect('/user/signin')
  })

});




function isLogedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = router;

const express = require("express");


const Product = require("../models/product");
const auth = require('../config/isAuth')

const router = express.Router(); 


/* GET home page. */
router.get("/",  async (req, res) => {
  try {
    const products = await Product.find({});
    const isAuthenticate = req.session.isLoggedIn;
    
    if (!products) {
      console.log("error occured!");
    } else {
      res.render("index", { products: products, isAuthenticate});
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/details/:id', (req,res)=>{
  const id = req.params.id;
  Product.findById(id, (err, product)=>{
    if(err){
      console.log(err);
    }
    res.render('singleProduct.ejs',{ product: product, isAuthenticate: req.session.isLoggedIn})
  })
})
router.get('/add-to-cart/:id', (req,res)=>{
  const productId = req.params.id;

  const cart = new Cart(req.session.cart ? req.session.cart : {})

  Product.findById(productId,(err,product)=>{
    if(err){
      return res.redirect('/')
    }
    cart.add(product, product.id)
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/')
  })
} )

module.exports = router;

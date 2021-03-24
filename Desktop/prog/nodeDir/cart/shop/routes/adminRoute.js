const router = require('express').Router();
const Product = require('../models/product')
const isLoggedIn = require('../config/isAuth')

router.post("/", isLoggedIn, async (req, res) => {
  try {
    const product = new Product({
      imagePath: req.body.img,
      title: req.body.title,
      description: req.body.desc,
      price: req.body.price,
      userId: req.user,
    });
    await product.save((err, data) => {
      console.log(data);
      if (err) {
        console.log(err);
      }
      res.redirect("/");
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/', isLoggedIn, async (req,res)=>{
  res.render('admin/admin.ejs',{
    isAuthenticated: req.session.isLoggedIn
  })
})



router.get('/products', isLoggedIn,async (req,res)=>{
  const products = await Product.find().populate('userId')
  console.log(products);
  res.render('admin/adminProducts.ejs',{ products})
})

// ********************  PRODUCTS ACTIONS  ****************************

router.get('/edit-products/:id', isLoggedIn,async(req,res)=>{
  const id = req.params.id;
  const product = await Product.findById(id)
  res.render('admin/adminEdit.ejs',{ product })
})

router.patch("/edit-products/:id", isLoggedIn, async (req, res) => {
  const id = req.params.id;
  const updatedInfo = {
    title: req.body.title,
    imagePath: req.body.img,
    description: req.body.desc,
    price: req.body.price,
  };
  await Product.findByIdAndUpdate(
    id,
    updatedInfo,
    { new: true, runValidators: true },
    (err, product) => {
      console.log(product);
      res.redirect("/admin/products");
    }
  );
});

router.get("/delete-products/:id", isLoggedIn, async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndDelete(id);
  res.redirect("/admin/products");
});

module.exports = router;
var express = require('express'),
  router = express.Router(),
  userCtrl = require('../controllers/UserController'),
  productCtrl = require('../controllers/ProductController'),
  allUserProductsCtrl = require('../controllers/allUserProductsController');
  passport = require('passport');

//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/product/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/product/createProduct', productCtrl.createProduct);
router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);

//-------------------------------AllUserProducts Routes----------------------------
router.get('/allUserProducts/getProducts', allUserProductsCtrl.getProducts);
router.get('/allUserProducts/getProduct/:AllProductsId',allUserProductsCtrl.getProduct);
router.get(
  '/allUserProducts/getProductsBelowPrice/:price',
  allUserProductsCtrl.getProductsBelowPrice
);
router.get('/allUserProducts/getProductsBySellername/:sellername',allUserProductsCtrl.getProductsBySellername)
router.get('/allUserProducts/getProductsByComponent/:component',allUserProductsCtrl.getProductsByComponent)
router.post('/allUserProducts/createProduct', allUserProductsCtrl.createProduct);
router.patch('/allUserProducts/updateProduct/:AllProductsId', allUserProductsCtrl.updateProduct);
router.delete('/allUserProducts/deleteProduct/:AllProductsId', allUserProductsCtrl.deleteProduct);

//-------------------------------Login Routes--------------------------------------
router.post('/register', userCtrl.register);
router.post('/login',userCtrl.login);
router.get('/logout',userCtrl.logout);

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});
router.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
  res.status(200).send("Success! You can not see this without a token");
});


module.exports = router;

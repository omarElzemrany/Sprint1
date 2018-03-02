var mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  AllProducts = mongoose.model('allUserProducts');

module.exports.getProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.AllProductsId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  AllProducts.findById(req.params.AllProductsId).exec(function(err, product) {
    if (err) {
      return next(err);
    }
    if (!product) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product retrieved successfully.',
      data: product
    });
  });
};

module.exports.getProducts = function(req, res, next) {
  AllProducts.find({}).exec(function(err, products) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg: 'Products retrieved successfully.',
      data: products
    });
  });
};

module.exports.getProductsBelowPrice = function(req, res, next) {
  if (!Validations.isNumber(req.params.price)) {
    return res.status(422).json({
      err: null,
      msg: 'price parameter must be a valid number.',
      data: null
    });
  }
  AllProducts.find({
    price: {
      $lt: req.params.price
    }
  }).exec(function(err, products) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg:
        'Products priced below ' +
        req.params.price +
        ' retrieved successfully.',
      data: products
    });
  });
};

module.exports.getProductsBySellername = function(req, res, next) {
  if (!Validations.isString(req.params.sellername)) {
    return res.status(422).json({
      err: null,
      msg: 'price parameter must be a valid String.',
      data: null
    });
  }
  AllProducts.find({
    sellername: req.params.sellername
  }).exec(function(err, products) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg:
        'Products sold by ' +
        req.params.sellername +
        ' retrieved successfully.',
      data: products
    });
  });
};

module.exports.getProductsByComponent = function(req, res, next) {
  if (!Validations.isNumber(req.params.component)) {
    return res.status(422).json({
      err: null,
      msg: 'price parameter must be a valid String.',
      data: null
    });
  }
  AllProducts.find({
    component: req.params.component
  }).exec(function(err, products) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg:
        'Products sold by ' +
        req.params.component +
        ' retrieved successfully.',
      data: products
    });
  });
};

module.exports.createProduct = function(req, res, next) {
  var valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price)&&
    req.body.sellername &&
    Validations.isString(req.body.sellername) &&
    req.body.component &&
    Validations.isNumber(req.body.component);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) , price(Number) , sellername(String) and component(Number) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  delete req.body.updatedAt;

  AllProducts.create(req.body, function(err, product) {
    if (err) {
      return next(err);
    }
    res.status(201).json({
      err: null,
      msg: 'Product was created successfully.',
      data: product
    });
  });
};

module.exports.updateProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.AllProductsId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  var valid =
  req.body.name &&
  Validations.isString(req.body.name) &&
  req.body.price &&
  Validations.isNumber(req.body.price)&&
  req.body.sellername &&
  Validations.isString(req.body.sellername) &&
  req.body.component &&
  Validations.isNumber(req.body.component);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) , price(Number) , sellername(String) and component(Number) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  req.body.updatedAt = moment().toDate();

  AllProducts.findByIdAndUpdate(
    req.params.AllProductsId,
    {
      $set: req.body
    },
    { new: true }
  ).exec(function(err, updatedProduct) {
    if (err) {
      return next(err);
    }
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product was updated successfully.',
      data: updatedProduct
    });
  });
};

module.exports.deleteProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.AllProductsId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  AllProducts.findByIdAndRemove(req.params.AllProductsId).exec(function(
    err,
    deletedProduct
  ) {
    if (err) {
      return next(err);
    }
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product was deleted successfully.',
      data: deletedProduct
    });
  });
};

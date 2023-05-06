const Product = require("../models/product");

// ALL PRODUCTS CONTROLLERS
exports.getProducts = (req, res, next) => {
  // Product.findAll()
  req.user
    .getProducts()
    .then((products) => {
      res.render("admin/products", {
        pageTitle: "Admin Products",
        prods: products,
        path: "/admin/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// SINGLE PRODUCT CONTROLLERS

exports.getAddProduct = (req, res, next) => {
  //ADD PRODUCT PAGE
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  req.user
    .createProduct({
      title,
      price,
      imageUrl,
      description,
    })
    .then((result) => {
      console.log("Product Created Succesfully");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.prodId;
  req.user
    .getProducts({ where: { id: prodId } })
    // Product.findByPk(prodId)
    .then((products) => {
      const product = products[0];
      if (!product) {
        return res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
  const { prodId, title, imageUrl, description, price } = req.body;
  Product.findByPk(prodId)
    .then((product) => {
      product.title = title;
      product.price = price;
      product.imageUrl = imageUrl;
      product.description = description;
      return product.save();
    })
    .then((result) => {
      console.log("Product Updated Succesfully:");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const { prodId } = req.body;
  Product.findByPk(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log("Product Deleted Succesfully");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

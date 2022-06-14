// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Products.belongsTo(Category, {
  foreign_key: "category_id",
});

// Categories have many Products
Category.hasMany(Products, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: {
    model: ProductTag,
    unique: false,
  },
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

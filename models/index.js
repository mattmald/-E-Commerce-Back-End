// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category,{
  foreignKey:'category_id'
});

Category.hasMany(Products,{
  foreignKey:'category_id'
  });

Product.belongToMany(Tags, {
   through: ProductTag,
  foreignKey:'product_id'
  });

Tag.belongToMany(Products, {
  through: ProductTag,
  foreignKey:"tag_id"
}); 

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

const Product = require('../models/product');

// Add a product to the inventory
exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Apply discount to a product
exports.applyDiscount = async (req, res) => {
  try {
    const { productId, discount } = req.body;
    const product = await Product.findByIdAndUpdate(
      productId,
      { discount },
      { new: true }
    );
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

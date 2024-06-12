const Cart = require('../models/cart');
const Product = require('../models/product');

// Add to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product || product.quantity < quantity) {
      return res.status(400).send({ error: 'Product not available or insufficient quantity' });
    }

    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart();
    }

    const itemIndex = cart.items.findIndex(item => item.productId.equals(productId));
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    cart.totalPrice += product.price * quantity * (1 - product.discount / 100);
    await cart.save();
    res.send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Remove from cart
exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    let cart = await Cart.findOne();
    if (!cart) {
      return res.status(400).send({ error: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.productId.equals(productId));
    if (itemIndex === -1) {
      return res.status(400).send({ error: 'Product not in cart' });
    }

    const product = await Product.findById(productId);
    const item = cart.items[itemIndex];
    cart.totalPrice -= product.price * item.quantity * (1 - product.discount / 100);
    cart.items.splice(itemIndex, 1);

    await cart.save();
    res.send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
};

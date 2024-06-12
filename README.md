# Assignment
Link for postman testing:-
https://www.postman.com/telecoms-astronaut-815469/workspace/dev/collection/36263422-66a2bb30-4042-498d-b5b4-06b40248a284?action=share&creator=36263422

APIs created:-
1.
Enter the URL for adding a product: http://localhost:3000/api/products/add.
Go to the Body tab.
Select raw and set the format to JSON.
Enter the JSON data for the product.
json
{
  "name": "Product1",
  "description": "This is a sample product.",
  "price": 10.99,
  "quantity": 100
}
2.
Enter the URL for applying a discount: http://localhost:3000/api/products/apply-discount.
Go to the Body tab.
Select raw and set the format to JSON.
Enter the JSON data for applying a discount.

{
  "productId": "PRODUCT_ID",
  "discount": 10
}
3.
Enter the URL for adding to cart: http://localhost:3000/api/cart/add-to-cart.
Go to the Body tab.
Select raw and set the format to JSON.
Enter the JSON data for adding a product to the cart. 
{
  "productId": "PRODUCT_ID",
  "quantity": 2
}
4:-
Enter the URL for removing from cart: http://localhost:3000/api/cart/remove-from-cart.
Go to the Body tab.
Select raw and set the format to JSON.
Enter the JSON data for removing a product from the cart.
{
  "productId": "PRODUCT_ID"
}



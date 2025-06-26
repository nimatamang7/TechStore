let cartItem = [];
let CartQuantity;
//checking if the product is already is localStorage or not
if (localStorage.getItem("cart")) {
  cartItem = JSON.parse(localStorage.getItem("cart"))
  CartQuantity = JSON.parse(localStorage.getItem("quantity"))
  document.querySelector('.cartQuantity').innerHTML = CartQuantity;
} else {
  CartQuantity = 0;
}

// function to add items in cart and update the number in above cart
function addCart(id) {
  let item = products.find(p => p.id == id);
  let copyItem = { ...item, quantity: 1 };
  // there is only 1 element with same id so using some to check all product for filter
  if (cartItem.some(p => p.id == id)) {
    cartItem = cartItem.map(p => {
      //checking if our cart has the product or not
      if (p.id === id) {
        //Returning upgraded version -array in cartItem with quantity incrased
        return { ...p, quantity: p.quantity + 1 };
      }
      //if no id found just returns the new object data
      return p;
    });
  } else {
    cartItem.push(copyItem);
  }

  CartQuantity = 0;
  //to update the number above cart
  cartItem.forEach(p => {
    CartQuantity += p.quantity;
  });

  localStorage.setItem("quantity", JSON.stringify(CartQuantity))
  //have to udate the page with the quantity html part--
  if (page == "cart") {
    displayCart();
  }
  //updating the number above cart
  document.querySelector('.cartQuantity').innerHTML = CartQuantity;

  //saving the cartItem in localStorage to get cart even after page refresh
  toMemory();
}
//function to save data to localStorage
function toMemory() {
  localStorage.setItem('cart', JSON.stringify(cartItem));
};

//  Creating content for cart Html
if (page == "cart") {

  const cartDisplay = document.getElementById('cart');
  function displayCart() {
    cartDisplay.innerHTML = "";
    cartItem.forEach(product => {
      const card = document.createElement("div");
      card.className = "grid-item";

      card.innerHTML = `
  <img src="${product.image}" alt="${product.name}" class="product-img" />
  <h3>${product.name}</h3>
  <div class="card-footer">
    <p class="text-container">Price: $${product.price}</p>
    <p>Quantity: ${product.quantity}</p>
    <button class="removeItem" onclick="RemoveItem(${product.id})">Delete One</button>
    <button class="addToCart" onclick="addCart(${product.id})">Add More</button>
  </div>
`;
      cartDisplay.appendChild(card);
    })
  };
  displayCart();
}
// Removeing one 1 item from cart
function RemoveItem(id) {
  let item = cartItem.find(p => p.id == id);
  item.quantity--;
  CartQuantity--;
  displayCart();
  //updating the number above cart
  document.querySelector('.cartQuantity').innerHTML = CartQuantity;

  if (item.quantity == 0) {
    let deleteProduct = item.id;
    //deleting the product from the array
    cartItem = cartItem.filter(item => item.id !== deleteProduct)
    displayCart();
  }
  localStorage.setItem("quantity", JSON.stringify(CartQuantity))
  //saving the cartItem in localStorage to get cart even after page refresh
  toMemory();


}
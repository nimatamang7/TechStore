function idElement(idData) {
  const container = document.getElementById(idData);
  if (!container) {
    console.warn(`Container with id "${idData}" not found.`);
    return; // Stop if container doesn't exist
  }

  // Clear previous content to avoid duplicate cards on multiple calls
  container.innerHTML = "";

  // Filter products by category matching idData
  const filteredProducts = products.filter(product => product.category === idData);
  let count = 0;

  filteredProducts.forEach(product => {
    // Show all products if page is 'all'
    // If on main page, show max 3 products per category
    if (page === "all" || (page === "main" && count < 3)) {
      const card = document.createElement("div");
      card.className = "grid-item";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img" />
        <h3>${product.name}</h3>
        <div class="card-footer">
          <p class="text-container">Price: $${product.price}</p>

          <button class="addToCart " onclick="
          addCart(${product.id});
          ">Add to Cart</button>

        </div>
      `;

      container.appendChild(card);
      count++;
    }
  });
}

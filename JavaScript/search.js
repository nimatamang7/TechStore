// search.js
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const resultsSection = document.getElementById("searchResultsSection");
  const resultsGrid = document.getElementById("searchResults");

  function displayResults(filteredProducts) {
    resultsGrid.innerHTML = "";

    if (filteredProducts.length === 0) {
      resultsGrid.innerHTML = "<p>No matching products found.</p>";
      return;
    }

    filteredProducts.forEach(product => {
      const item = document.createElement("div");
      item.className = "grid-item";
      item.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img" />
        <h3>${product.name}</h3>
        <p class="text-container">$${product.price}</p>
        <div class="card-footer">
          <span style="color: ${product.inStock ? 'green' : 'red'};">
            ${product.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <button onclick="
            addCart(${product.id});
          "
          >Add to Cart</button>
        </div>
      `;
      resultsGrid.appendChild(item);
    });
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    if (query === "") {
      resultsSection.style.display = "none";
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );

    resultsSection.style.display = "block";
    displayResults(filtered);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.value = "";
    resultsSection.style.display = "none";
  }
});

function searchProducts() {
    const query = document.getElementById('searchInput').value;
    const resultsContainer = document.getElementById('searchResults');

    // Simulated product data (replace with dynamic data from your backend)
    const products = [
      { name: "Product 1" },
      { name: "Product 2" },
      { name: "Product 3" },
      { name: "Product 4" },
      { name: "Product 5" }
    ];

    // Filter products based on the search query
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));

    // Display the results
    resultsContainer.innerHTML = "";
    filteredProducts.forEach(product => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = product.name;
      resultsContainer.appendChild(li);
    });
  }
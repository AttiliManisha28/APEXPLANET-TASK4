function filterProducts() {
  const search = document.getElementById('search').value.toLowerCase();
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    product.style.display = product.textContent.toLowerCase().includes(search) ? 'block' : 'none';
  });
}

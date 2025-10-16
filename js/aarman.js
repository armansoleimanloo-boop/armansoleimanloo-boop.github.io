
let cart = [];

function addToCart(button) {
  const product = button.closest('.product');
  const name = product.querySelector('h3').innerText;
  const price = parseInt(product.querySelector('p').innerText);
  const image = product.querySelector('img').src;

  cart.push({ name, price, image });
  updateCartUI();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.length;
  document.getElementById('cartCount').innerText = count;
  const box = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');

  if (count === 0) {
    box.innerHTML = 'سبد خرید خالی است';
    totalEl.innerHTML = '';
    return;
  }

  box.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}">
      <span>${item.name}<br><small>${item.price.toLocaleString()} تومان</small></span>
      <button class="remove-btn" onclick="removeItem(${index})">×</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, p) => sum + p.price, 0);
  totalEl.innerHTML = `جمع کل: ${total.toLocaleString()} تومان`;
}

function toggleCart() {
  const box = document.getElementById('cartBox');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
}


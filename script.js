let cart = [];

function addToCart(productId) {
    const productElement = document.querySelector(`img[data-id='${productId}']`);
    const price = parseFloat(productElement.getAttribute('data-price'));
    const productName = productElement.alt;

    const product = {
        id: productId,
        name: productName,
        price: price
    };

    cart.push(product);
    alert(`${productName} has been added to the cart!`);
}

function showCart() {
    const cartElement = document.getElementById('cart');
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rs ${item.price}`;
        cartItemsElement.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
    cartElement.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    let cartCount = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            document.getElementById("cart-count").innerText = cartCount;
            
            // Get product info
            let name = this.dataset.name;
            let price = this.dataset.price;

            // Store in local storage
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ name, price });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(name + " added to cart!");
        });
    });
});

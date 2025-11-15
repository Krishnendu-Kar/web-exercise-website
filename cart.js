document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartItems.forEach((item, index) => {
            let itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <span>${item.name} - ₹${item.price}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(itemDiv);
            totalPrice += parseInt(item.price);
        });
    }

    document.getElementById("total-price").textContent = totalPrice;
});

function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    location.reload();
}

function checkout() {
    alert("Proceeding to checkout!");
    localStorage.removeItem("cart"); // Clear cart after checkout
    window.location.href = "checkout.html"; // Redirect to checkout page
}
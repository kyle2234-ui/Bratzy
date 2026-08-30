let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();

    document.querySelector(".cart-overlay").classList.add("open");
}

function updateCart() {
    const items = document.getElementById("cart-items");
    const count = document.getElementById("cart-count");
    const totalElement = document.getElementById("cart-total");

    count.textContent = cart.length;
    totalElement.textContent = total;

    if (cart.length === 0) {
        items.innerHTML = `<p class="empty-cart">Your bag is empty.</p>`;
        return;
    }

    items.innerHTML = "";

    cart.forEach((item, index) => {
        items.innerHTML += `
            <div class="cart-item">
                <><span>${item.name}</span><strong>$${item.price}</strong><button onclick="removeFromCart(${index})">×</button></>
            </div>
        `;
    });
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function openCart() {
    document.querySelector(".cart-overlay").classList.add("open");
}

function closeCart(event) {
    if (!event || event.target === document.getElementById("cart-overlay")) {
        document.querySelector(".cart-overlay").classList.remove("open");
    }
}

document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    const heroProduct = document.querySelector(".hero-product");

    if (heroProduct) {
        heroProduct.style.transform =
            `rotate(-8deg) translate(${x}px, ${y}px)`;
    }
});


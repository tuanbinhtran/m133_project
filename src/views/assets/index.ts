import { Product } from "../../products/product";

var titleElement = document.getElementById('home');
var cartTotalElement = document.getElementById('cartTotal');
var cartItems:  number[];

titleElement.addEventListener('click', () => {
    window.location.href = '/';
});

getCartTotal();


async function getCart() {
    var items = await fetch('/api/cart')
        .then(cart => cart.json())
        .then(cart => cart);

    return items;
}


export async function getCartTotal() {
    var total = 0;
    var items = await getCart() as number[];

    if (items) {
        await Promise.all(items.map(async (id: number) => {
            var product = await fetch('/api/products/' + id)
                .then((product) => product.json())
                .then((product: Product) => product);

            total += product.specialOffer;
        }));
    }

    cartTotalElement.innerText = `CHF ${total.toFixed(2)}`;
}

export async function refreshCart() {
    var response = await fetch
}

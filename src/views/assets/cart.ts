import { Product } from "../../products/product";

var cartContentElement = document.getElementById('cart-content');

getCartContents();

function submit() {
    fetch('/api/cart/delete', {
        method: 'DELETE',
        credentials: 'same-origin',
    });
}

async function getCart() {
    var items = await fetch('/api/cart')
        .then(cart => cart.json())
        .then(cart => cart);

    return items;
}

async function getCartContents() {
    var cartTotal = 0;
    var productIds = await getCart() as number[];
    var productIdSet = new Set(productIds);
    var counts = {};

    console.log(productIdSet);

    productIds.forEach(id => {
        counts[id] = counts[id] ? counts[id] + 1 : 1;
    });

    if (counts) {

        await Promise.all(productIds.map(async (id: number) => {
            var productTotal = 0;
            var product = await fetch('/api/products/' + id)
                .then((product) => product.json())
                .then((product: Product) => product);

            productTotal = product.specialOffer * counts[id];

            if (!cartContentElement.innerHTML.includes(product.productName)) {
                cartContentElement.innerHTML += `
                <td>${product.productName}</td>
                <td>${product.specialOffer.toFixed(2)}</td>
                <td>${counts[id]}</td>
                <td>${productTotal.toFixed(2)}</td>
            `
            }


        }));

        cartContentElement.innerHTML += `
                <td></td>
                <td></td>
                <td></td>
                <td>${cartTotal.toFixed(2)}</td>`
    }
}

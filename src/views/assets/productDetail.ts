import { Product } from './../../products/product';
import { getCartTotal } from '.';

var detailElement = document.getElementsByClassName('product-details')[0];

const productId = detailElement.id;




console.log(location.hostname);

fetch('/api/products/' + productId)
    .then((product) => product.json())
    .then((product: Product) => { renderProduct(product); });


function renderProduct(product: Product) {
    detailElement.innerHTML +=
        `
        <div class="pure-u-1 m-box" >
            <div id="${product.id}"  class="product-detail">
                <div class="thumbnail">
                    <img class="pure-img" src="/assets/${product.imageName}"/>
                </div>
                <div class="content">
                    <p>${product.productName}</p>
                    <p class="normalPriceTag">CHF ${product.normalPrice.toFixed(2)}</p>
                    <p class="specialOfferTag">CHF ${product.specialOffer.toFixed(2)}</p>
                    <p class="description">${product.description}</p>
                    <a id="addToCart" class="pure-button">
                        <i class="fa fa-shopping-cart fa-lg"></i>
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
        `;

    var btnToCart = document.getElementById('addToCart');
    btnToCart.addEventListener('click', () => { addToCart(+productId) });
}

async function addToCart(id: number) {
    var data = {
        id: id,
    };

    await fetch('/api/cart/add', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    getCartTotal();
}

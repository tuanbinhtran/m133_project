import { Product } from './../../products/product';

var detailElement = document.getElementsByClassName('product-detail')[0];
var btnToCart = document.getElementById('addToCart');

const productId = detailElement.id;


btnToCart.addEventListener('click', () => { addToCart(+productId) });

console.log(location.hostname);

fetch('/api/products/' + productId)
    .then((product) => product.json())
    .then((product: Product) => { renderProduct(product); });


function renderProduct(product: Product) {
    detailElement.innerHTML +=
        `
        <div class="pure-u-1 m-box" >
            <div id="${product.id}"  class="product">
                <div class="thumbnail">
                    <img class="pure-img" src="/assets/${product.imageName}"/>
                </div>
                <div class="content">
                    <p>${product.productName}</p>
                    <p class="normalPriceTag">${product.normalPrice.toFixed(2)}</p>
                    <p class="specialOfferTag">${product.specialOffer.toFixed(2)}</p>
                    <p class="description">${product.description}</p>
                </div>
            </div>
        </div>
        `
}

function addToCart(id: number) {
    // todo
}

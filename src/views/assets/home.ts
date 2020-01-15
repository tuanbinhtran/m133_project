import nunjucks from 'nunjucks'
import { Product } from '../../products/product';

console.log('home.ts')

var productsGridElement = document.getElementById('products-grid');
// var template = nunjucks.compile(`
// {% for product in products %}
//     <div class="pure-u-1-2 pure-u-lg-1-3 m-box" >
//         <img class="pure-img" src="./assets/{{  product.imageName  }}" />
//         <p>{{ product.productName }}</p>
//         <p class="normalPriceTag">{{ product.normalPrice }}</p>
//         <p class="specialOfferTag">{{ product.specialOffer }}</p>
//     </div>
// {% endfor %}
// `);


fetch('api/products')
    .then((products) => products.json())
    .then((products: Product[]) => { products.forEach(renderProduct) });

function renderProduct(product: Product) {
    productsGridElement.innerHTML +=
        `
        <div class="pure-u-1-2 pure-u-lg-1-3 m-box" >
            <div class="product">
                <div class="thumbnail">
                    <img class="pure-img" src="./assets/${product.imageName}"/>
                </div>
                <div class="content">
                    <p>${product.productName}</p>
                    <p class="normalPriceTag">${product.normalPrice.toFixed(2)}</p>
                    <p class="specialOfferTag">${product.specialOffer.toFixed(2)}</p>
                </div>
            </div>
        </div>
        `
}


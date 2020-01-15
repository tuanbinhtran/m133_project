import nunjucks from 'nunjucks'
import { Product } from '../../products/product';

console.log('home.ts')

var productsElement = document.getElementsByClassName('pure-g')[0];
var template = nunjucks.compile(`
{% for product in products %}
    <div class="pure-u-1-2 pure-u-lg-1-3 m-box" >
        <img class="pure-img" src="./assets/{{  product.imageName  }}" />
        <p>{{ product.productName }}</p>
    </div>
{% endfor %}
`);

var products =  fetch('api/products')
    .then(products => products.json())
    .then((products: Product[]) => products)
    .then(products => {
        console.log(products);
        productsElement.innerHTML += template.render({ products: products });
    });


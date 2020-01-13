import nunjucks from 'nunjucks'
import { Product } from '../../products/product';

console.log('home.ts')

var productsElement = document.getElementById('products');
var template = nunjucks.compile(`
{% for product in products %}
    <img src="{{  product.imageName  }}" />
    <p>{{ product.productName }}</p>
{% endfor %}
`);

var products =  fetch('api/products')
    .then(products => products.json())
    .then((products: Product[]) => products)
    .then(products => {
        console.log(products);
        productsElement.innerHTML += template.render({ products: products });
    });


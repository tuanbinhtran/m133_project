import { Product } from './product';
import productsJson from '../assets/products.json';

class ProductsService {

    findAll(): Product[] {
        var products = productsJson.map( productJson =>
            new Product(
                +productJson.id,
                productJson.productName,
                productJson.specialOffer,
                productJson.normalPrice,
                productJson.imageName,
                productJson.description
            )
        );

        return products;
    }

    find(id: number): Product {
        var product = this.findAll().find(x => x.id === id);

        return product;
    }
}

export default new ProductsService();

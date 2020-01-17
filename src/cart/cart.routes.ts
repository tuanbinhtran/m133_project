
import express, { Response } from 'express';
import productsService from '../products/products.service';
import sharedService from '../shared.service';
import { Product } from '../products/product';

const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.cart == undefined) {
        req.session.cart = <number[]>[];
    }

    res.json(req.session.cart);
});

router.delete('/', (req, res) => {
    req.session.cart = <number[]>[];

    res.end(200);
});

router.post('/add', (req, res) => {
    var id = req.body.id;
    var cart = req.session.cart as number[];

    var product = tryGetProduct(String(id), res);

    req.session.cart = <number[]>[
        ...cart,
        product.id
    ];

    res.sendStatus(200);
});

router.post('remove/:id', (req, res) => {
    var cart: number[] = req.session.cart;

    var productIndex = cart.findIndex(id => id == +req.params.id);

    cart.splice(productIndex, 1);

    req.session.cart = <number[]>[
        ...cart
    ];

    res.sendStatus(200);
});

function tryGetProduct(id: string, res: Response): Product {

    if (!sharedService.isNumbersOnly(id)) {
        sharedService.badRequest(res);
    }

    var product = productsService.getProductById(+id);

    if (!product) {
        sharedService.notFound(res);
    }

    return product;
}


export default router;

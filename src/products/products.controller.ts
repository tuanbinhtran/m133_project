
import express from 'express';
import { Response } from 'express';
import productsService from './products.service';
import sharedService from '../shared.service';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(productsService.getAllProducts());
    res.end();
})

router.get('/:id', (req, res) => {
    var id = req.params.id;

    if (!isNumbersOnly(id)) {
        sharedService.badRequest(res);
    }

    var product = productsService.getProductById(+id);

    if (!product) {
        sharedService.notFound(res);
    }

    res.status(200);
    res.send(product);
});

function isNumbersOnly(value: string): boolean {
    return value.match(/^\d+$/g) ? true : false;
}

export default router;

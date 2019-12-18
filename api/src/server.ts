import express from 'express';
import { Product } from './product';
import productsJson from '../assets/products.json';
import productsService from './products.service';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(productsService.findAll());
    res.end();
});

app.get('/api/product/:id', (req, res) => {
    var id = req.params.id

    if (!id.match(/^\d+$/g)) {
        res.status(400);
        res.send('Bad request');
    }

    var product = productsService.find(+id);

    if (!product) {
        res.status(404);
        res.send('Not Found');
    }

    res.status(200);
    res.send(product);
});

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});

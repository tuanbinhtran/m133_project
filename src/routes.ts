import express from 'express';
import productsRoutes from './products/products.routes';

var router = express.Router();

// api routes
router.use('/api/products', productsRoutes);


// page routes
router.get('/', (req, res) => {
    res.render('home');
}).get('/product/:id', (req, res) => {
    var productId = req.params.id;

    if (!productId) {
        res.json('Invalid product id');
    }

    res.render('product', { id: productId });
});


export default router;

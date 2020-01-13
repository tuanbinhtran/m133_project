import express from 'express';
import productsRoutes from './products/products.routes';

var router = express.Router();

router.use('/api/products', productsRoutes);

export default router;

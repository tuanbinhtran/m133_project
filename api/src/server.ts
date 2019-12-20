import express from 'express';
import productsController from './products.controller';

const app = express();

app.use('/api/products', productsController);

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});

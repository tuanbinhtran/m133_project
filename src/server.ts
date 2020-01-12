import express from 'express';
import productsController from './products/products.controller';
import nunjucks, { configure } from 'nunjucks';

const app = express();

configure(__dirname + '/views', {
    autoescape: true,
    watch: true,
    express: app
});
app.set('view engine', 'html');

app.use('/assets', express.static(__dirname + '/views/assets'));

app.use('/api/products', productsController);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('home');
});


app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});

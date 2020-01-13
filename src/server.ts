import express from 'express';
import routes from './api.routes';
import nunjucks, { configure } from 'nunjucks';

const app = express();

configure(__dirname + '/views', {
    autoescape: true,
    watch: true,
    express: app
});
app.set('view engine', 'html');

app.use('/assets', express.static(__dirname + '/views/assets'));

app.use(routes);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/product/:id', (req, res) => {
    var productId = req.params.id;

    res.render('product', { id: productId })


});


app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});

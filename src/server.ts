import express from 'express';
import routes from './routes';
import nunjucks, { configure } from 'nunjucks';
import expressSession from 'express-session';

const app = express();

app.use(express.json());
app.use(expressSession({
    secret: "super-safe-secret",
    resave: false,
    saveUninitialized: true
}));
// configure nunjucks and set view engine
configure(__dirname + '/views', {
    autoescape: true,
    watch: true,
    express: app
});
app.set('view engine', 'html');

// use routes
app.use(routes);


// static paths
app.use('/js', express.static(__dirname + '/views/assets'));
app.use('/css', express.static(__dirname + '/views/css'));
app.use('/assets', express.static(__dirname + '/assets'));

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});

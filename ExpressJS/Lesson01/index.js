const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productRoute = require('./routes/product.route');
const authRoute = require('./routes/auth.route');
const cookieParse = require('cookie-parser');
const authMiddleware = require('./middlewares/auth.middleware');
const port = 3880;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParse('dfjljiqwoejioasd213'));
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/',(req, res) => {
    res.render('index',{
        name: 'Long'
    });
})
app.use('/auth', authRoute);
app.use('/products', authMiddleware.requireAuth, productRoute);
app.listen(port, () => console.log(`Server listening on port ${port}`));

const db = require('../db');
const shortid = require('shortid');

module.exports.index = (req,res) => {
    res.render('products/index',{
        products: db.get('products').value()
    });
}

module.exports.search = (req,res) => {
    let q = req.query.q;
    let matchedProducts = db.get('products').value().filter(product => product.name.toLowerCase().indexOf(q.toLowerCase()) !== - 1);
    
    res.render('products/index', {
        products: matchedProducts
    })
}

module.exports.create = (req,res) => {
    res.render('products/create');
}

module.exports.detail = (req,res) => {
    const id = req.params.id;

    const product = db.get('products').find({id : id}).value();
    res.render('products/view', {
        product: product
    });
}

module.exports.postCreate = (req,res) => {
    req.body.id = shortid.generate();
    db.get('products').push(req.body).write();
    res.redirect('/products');
}
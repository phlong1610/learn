module.exports.postCreate = (req, res, next) => {    
    let errors = [];
    if(!req.body.name) {
        errors.push('Name is required.');
    }
    if(!req.body.price) {
        errors.push('Price is required');
    }
    if(errors.length) {
        res.render('products/create',{
            errors : errors,
            values: req.body
        });
        return;
    }
    next();
}
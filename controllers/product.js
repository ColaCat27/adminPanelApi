import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
    const body = req.body;

    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You need to provide product data'
        })
    }

    const product = new Product(body);
    
    if(!product) {
        return res.status(400).json({
            success: false,
            error: 'Product not created'
        })
    }

    product.save().then(() => {
        return res.status(201).json({
            success: true,
            id: product._id,
            message: 'Product created'
        })
    }).catch(err => {
        return res.status(400).json({
            err,
            error: 'Product not created'
        })
    })

}
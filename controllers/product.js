import Product from '../models/Product.js';

export const createProduct = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You need to provide product data',
        });
    }

    const product = new Product(body);

    if (!product) {
        return res.status(400).json({
            success: false,
            error: 'Product not created',
        });
    }

    product
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: product._id,
                message: 'Product created',
            });
        })
        .catch((err) => {
            return res.status(400).json({
                err,
                error: 'Product not created',
            });
        });
};

export const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete({ id: req.params.id }, (err, product) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            });
        }

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        return res.status(200).json({
            success: true,
            data: product,
        });
    }).catch((err) => console.log(err));
};

export const updateProduct = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Need to provide new data for product',
        });
    }

    await Product.findByIdAndUpdate({ id: req.params.id }, (err, product) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            });
        }

        if (!product) {
            return res.status(404).json({
                success: false,
                error: 'Product not found',
            });
        }

        return res.status(200).json({
            success: true,
            data: product,
        });
    });
};

export const getProductById = async (req, res) => {
    await Product.findById({ id: req._id }, (err, product) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            });
        }

        if (!product) {
            return res.status(404).json({
                success: false,
                error: 'Product not found',
            });
        }

        return res.status(200).json({
            success: true,
            data: product,
        });
    }).catch((err) => console.log(err));
};

export const getProducts = async (req, res) => {
    await Product.find({}, (err, products) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            });
        }

        if (!products) {
            return res.status(404).json({
                success: false,
                error: 'Products not found',
            });
        }

        let result = products.map((product) => {
            const { createdAt, updatedAt, _id, ...otherDetails } = product._doc;
            return { id: _id, ...otherDetails };
        });

        return res.status(200).json({
            success: true,
            data: result,
        });
    })
        .clone()
        .catch((err) => console.log(err));
};

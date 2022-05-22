import express from 'express';
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct,
    getCount,
} from '../controllers/product.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/getCount', getCount);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

export default router;

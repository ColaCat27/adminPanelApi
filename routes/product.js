import express from 'express';
import {
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateProduct,
} from '../controllers/product.js';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.delete('/:id', deleteProduct);
router.update('/:id', updateProduct);

export default router;

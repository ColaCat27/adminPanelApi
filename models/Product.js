import mongoose from 'mongoose';

const Product = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Product', Product);

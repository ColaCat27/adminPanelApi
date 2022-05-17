import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Product = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String},
        
    },
    {timestamps: true}
)


export default mongoose.model('Product', Product)
import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    title: String,
    img: String,
    price: Number,
    oldPrice: Number,
    description: String,
    sold: Number,
    availability: Boolean,
    categories: [String],
    reviews: [{
        author: String,
        content: String,
        rating: Number
    }]
})

const Product = mongoose.model('Product', productSchema);

export default Product;
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true 
    },
    price: {
        type: Number,
        required: true
    },
    qnt_storage: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;

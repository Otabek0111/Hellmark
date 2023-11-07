const { Schema, model } = require ('mongoose');

//list of products for database
const productSchema = new Schema ({
    productId: {
        type: String,
        unique: true,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

});

const Product = model ('Product', productSchema);

module.exports = Product;
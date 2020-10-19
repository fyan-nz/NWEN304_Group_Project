/**
 * responsible for making database queries te fetch products.
 */

const Product = require('../models/productModle');

class ProductQueries {
    async getRandomProducts(size) {
        let products = await Product.find();
        this.shuffle(products);
        if (size && size > -1) {
            return products.slice(0, size);
        } else {
            return products;
        }
    }

    /**
     * shuffles an array.
     *
     * @param arr the array of elements that we want to shuffle
     */
    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const index = Math.floor(Math.random() * i);
            const temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }

    async getProductsByType(type) {
        if (type === 'Suits') {
            type = 'Suits & Blazers';
        }
        return await Product.find({ productType: type });
    }

    async getAll() {
        return await Product.find();
    }

    async deleteProduct(id) {
        return await Product.deleteOne({ _id: id })
    }

    async getProductById(productId) {
        // check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
            throw new Error('no product found with the given id');
        }
        return product;
    }

    async getProductsByIds(productIds) {
        const products = Product.find({
            _id: {
                $in: productIds
            }
        });

        if (!products) {
            throw new Error('no products were found');
        }

        return products;
    }
}

module.exports = new ProductQueries();
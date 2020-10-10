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
            return await this.getAllSuits();
        }
        return await Product.find({ productType: type });
    }

    async getAllTShirts() {
        return await Product.find({ productType: 'T-shirts' });
    }

    async getAllPants() {
        return await Product.find({ productType: 'Pants' });
    }

    async getAllHoodies() {
        return await Product.find({ productType: 'Hoodies' });
    }

    async getAllSuits() {
        return await Product.find({ productType: 'Suits & Blazers' });
    }

    async getAllUnderwear() {
        return await Product.find({ productType: 'Underwear' });
    }

    async getAllSocks() {
        return await Product.find({ productType: 'Socks' });
    }

    async getAllAccessories() {
        return await Product.find({ productType: 'Accessories' });
    }
}

module.exports = new ProductQueries();
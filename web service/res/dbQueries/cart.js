const UserQueries = require('./users');
const ProductQueries = require('./products');

class CartQueries {
    async addItemToCart(userId, jwt, itemId) {
        const user = await UserQueries.getUserByIdAndType(userId, jwt);

        // check if the product exists
        const product = await ProductQueries.getProductById(itemId);

        // add the item to the user's cart
        user.cart.push(product._id);
        await user.save();
    }

    async removeItemFromCart(userId, jwt, itemId) {
        const user = await UserQueries.getUserByIdAndType(userId, jwt);

        // check if the product exists
        const product = await ProductQueries.getProductById(itemId);

        // get the product ID's index in the cart
        const itemIndex = user.cart.indexOf(product._id);
        if (itemIndex < 0) {
            throw new Error('cart has not item with the given id');
        }

        // remove the item from the cart
        user.cart.splice(itemIndex, 1);
        await user.save();
    }

    async completePurchase(userId, jwt) {
        const user = await UserQueries.getUserByIdAndType(userId, jwt);
        if (user.cart.length === 0) {
            throw new Error('cart is empty');
        }

        // add cart items to the user's purchases list and reset the cart
        user.purchases.push(...user.cart);
        user.cart = [];
        await user.save();
    }

    async getUsersCart(userId, jwt) {
        const user = await UserQueries.getUserByIdAndType(userId, jwt);
        if (user.cart.length > 0) {
            return await ProductQueries.getProductsByIds(user.cart);
        }

        return [];
    }
}

module.exports = new CartQueries();
const router = require('express').Router();
const CartQueries = require('../../dbQueries/cart');

router.post('/add', async (req, res) => {
    const userInfo = req.user || req.session.user;

    // check if the user is logged in
    if (!userInfo) {
        res.status(401).send('you need to login before adding items to the cart');
        return;
    }

    const { itemId } = req.body;

    // check if there an item id was passed
    if (!itemId) {
        res.status(400).send('the itemId parameter is required');
        return;
    }

    try {
        await CartQueries.addItemToCart(userInfo.id, userInfo.jwt, itemId);
        res.status(200).send();
    } catch (err) {
        console.log(err)
        res.status(500).send('something went wrong');
    }
});

router.post('/remove', async (req, res) => {
    const userInfo = req.user || req.session.user;

    // check if the user is logged in
    if (!userInfo) {
        res.status(401).send('you need to login before adding items to the cart');
        return;
    }

    const { itemId } = req.body;

    // check if there an item id was passed
    if (!itemId) {
        res.status(400).send('the itemId parameter is required');
        return;
    }

    try {
        await CartQueries.removeItemFromCart(userInfo.id, userInfo.jwt, itemId);
        res.status(200).send();
    } catch (err) {
        res.status(500).send('something went wrong');
    }
});

module.exports = router;
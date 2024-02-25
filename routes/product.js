const express = require('express');
const router = express.Router();
const {product} = require('../models');


router.get('/', async (req, res) => {
    const listOfProduct = await product.findAll();
    res.json(listOfProduct);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await product.create(post);
    res.json(post);
})

module.exports = router;
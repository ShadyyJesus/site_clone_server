const express = require('express');
const router = express.Router();
const {gallary} = require('../models');


router.get('/', async (req, res) => {
    const gallaryList = await gallary.findAll();
    res.json(gallaryList);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await gallary.create(post);
    res.json(post);
})

module.exports = router;
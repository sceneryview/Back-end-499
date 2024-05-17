const express = require('express')
const router = express.Router()

const {
    read,
    list,
    create,
    update,
    remove
} = require('./controller')



//http://localhost:5000/api/
router.get('/allversion',  async (req, res) => {
    const product = await read(req, res);
    res.json(product);
});

router.get('/version/:id', async (req, res) => {
    const product = await list(req, res);
    res.json(product);
});
router.post('/create', async (req, res) => {
    const product = await create(req, res);
    res.json(product);
});
router.put('/update/:id', async (req, res) => {
    const product = await update(req, res);
    res.json(product);
});
router.delete('/version/:id',  async (req, res) => {
    const product = await remove(req, res);
    res.json(product);
});



module.exports = router
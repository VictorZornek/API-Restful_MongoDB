const { Router } = require("express");  

const ProductsController = require("../controllers/ProductsController");

const productsRoutes = Router();
const productsController = new ProductsController();


productsRoutes.post('/', productsController.create);

productsRoutes.get('/', async (req, res) => {
    try {
        const produto = await Produto.find();
        res.send(produto);
    } catch (error) {
        res.status(500).send(error);
    }
});


productsRoutes.get('/:id', async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id);
        if (!produto) return res.status(404).send();
        res.send(produto);
    } catch (error) {
        res.status(500).send(error);
    }
});


productsRoutes.patch('/:id', async (req, res) => {
    try {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!produto) return res.status(404).send();
        res.send(produto);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const produto = await Produto.findByIdAndDelete(req.params.id);
        if (!produto) return res.status(404).send();
        res.send(produto);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

const { Router } = require("express");  

const ProductsController = require("../controllers/ProductsController");

const productsRoutes = Router();
const productsController = new ProductsController();


productsRoutes.post('/', productsController.create);
productsRoutes.get('/', productsController.index);
productsRoutes.get('/:id', productsController.show);


module.exports = productsRoutes;

const { Router } = require("express");  

const ProductsController = require("../controllers/ProductsController");

const productsRoutes = Router();
const productsController = new ProductsController();


productsRoutes.post('/', productsController.create);


module.exports = productsRoutes;

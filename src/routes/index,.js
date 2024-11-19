const { Router } = require("express");

const productsRouter = require("./product.routes")


const routes = Router();

routes.use("/products", productsRouter);

module.exports = routes;
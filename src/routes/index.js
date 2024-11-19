const { Router } = require("express");

const productsRouter = require("./product.routes");
const usersRoutes = require("./user.routes");

const routes = Router();

routes.use("/users", usersRoutes)
routes.use("/products", productsRouter);

module.exports = routes;
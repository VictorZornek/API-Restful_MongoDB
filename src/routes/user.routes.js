const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.post('/', usersController.create);
usersRoutes.delete('/:id', usersController.delete);
usersRoutes.get('/:id', usersController.show);
usersRoutes.get('/', usersController.index);

module.exports = usersRoutes;
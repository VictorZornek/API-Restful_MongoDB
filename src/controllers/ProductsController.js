const Product = require("../models/product");
const AppError = require("../utils/AppError");

class ProductsController {
    async create(request, response) {
        const {
            name,
            description,
            price,
            qnt_storage,
            user

        } = request.body

        if (!name || !description || !price || !qnt_storage || !user) {
            throw new AppError("Todos os campos são obrigatórios!")
        }

        const checkNameExists = await Product.findOne({ name: name })

        if (checkNameExists) {
            throw new AppError("Um produto com esse nome já está cadastrado!")
        }

        await Product.save({
            name,
            description,
            price,
            qnt_storage,
            user
        })

        return response.status(201).json({ message: "Novo produto cadastrado com sucesso!"})
    }

    async index(request, response) {
        const products = await Product.find()

        return response.status(200).json({ products })
    }
}

module.exports = ProductsController;
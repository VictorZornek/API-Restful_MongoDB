const { Types } = require("mongoose");
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

    async delete(request, response) {
        const { id } = request.params

        await Product.deleteOne({ _id: Types.ObjectId.createFromHexString(id) })

        return response.status(200).json({ message: "Produto deletado com sucesso!" })
    }

    async show(request, response) {
        const { id } = request.params
        
        const product = await Product.find({ _id: Types.ObjectId.createFromHexString(id) })

        return response.status(200).json({ product })
    }

    async index(request, response) {
        const products = await Product.find()

        return response.status(200).json({ products })
    }
}

module.exports = ProductsController;
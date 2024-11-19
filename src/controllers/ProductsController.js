const { Types } = require("mongoose");
const Product = require("../models/product");
const AppError = require("../utils/AppError");

const dbProduct = new Product();

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

        const newProduct = new Product({
            name,
            description,
            price,
            qnt_storage,
            user
        })

        await newProduct.save()

        return response.status(201).json({ message: "Novo produto cadastrado com sucesso!"})
    }

    async update(request, response) {
        const { id } = request.params
        const { name, description, price, qnt_storage } = request.body

        if (!name || !description || !price || !qnt_storage) {
            throw new AppError("Todos os campos devem estar preenchidos!")
        }

        const product = await Product.findOne({ _id: id })

        const checkNameChange = await Product.findOne({ name: name })

        if (checkNameChange && checkNameChange._id.toString() !== product._id.toString()) {
            throw new AppError("Este nome já está sendo cadastrado por outro produto!")
        }

        product.name = name ?? product.name
        product.description = description ?? product.description
        product.price = price ?? product.price
        product.qnt_storage = qnt_storage ?? product.qnt_storage

        await dbProduct.updateOne(
            { _id: Types.ObjectId.createFromHexString(product._id) },
            { $set:  {
                name: product.name,
                description: product.description,
                price: product.price,
                qnt_storage: product.qnt_storage
            }}
        )

        return response.status(200).json({ message: "Produto alterado com sucesso!" })
    }

    async delete(request, response) {
        const { id } = request.params

        await dbProduct.deleteOne({ _id: Types.ObjectId.createFromHexString(id) })

        return response.status(200).json({ message: "Produto deletado com sucesso!" })
    }

    async show(request, response) {
        const { id } = request.params
        
        const product = await Product.find({ _id: Types.ObjectId.createFromHexString(id) })

        if (!product) {
            throw new AppError("O produto não foi encontrado!")
        }

        return response.status(200).json({ product })
    }

    async index(request, response) {
        const products = await Product.find()

        return response.status(200).json({ products })
    }
}

module.exports = ProductsController;
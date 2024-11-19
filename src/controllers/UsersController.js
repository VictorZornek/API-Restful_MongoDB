const { Types } = require("mongoose");
const User = require("../models/user");
const AppError = require("../utils/AppError");
const { hash, compare } = require("bcryptjs");

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body

        if (!name || !email || !password) {
            throw new AppError("Todos os campos são obrigatórios!")
        }

        const checkEmailExists = await User.findOne({ email: email })

        if (checkEmailExists) {
            throw new AppError("Este e-mail já está cadastrado!")
        }

        const hashedPassword = await hash(password, 8)

        const newUser = new User({ 
            name, 
            email, 
            password: hashedPassword 
        })

        await newUser.save()

        return response.status(201).json({ message: "Usuário criado com sucesso!" })
    }

    async show(request, response) {
        const { id } = request.params

        const user = await User.find({ _id: Types.ObjectId.createFromHexString(id) })
    
        if (!user) {
            throw new AppError("O usuário não foi encontrado!")
        }

        return response.status(200).json({ user })
    }
}

module.exports = UsersController;
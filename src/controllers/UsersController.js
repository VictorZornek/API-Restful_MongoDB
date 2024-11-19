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

    async update(request, response) {
        const { id } = request.params
        const { name, email, password, old_password } = request.body

        if (!name || !email) {
            throw new AppError("Os campos de nome e e-mail devem ser preenchidos!")
        }

        const user = await User.findOne({ _id: id })

        const checkEmailChange = await User.findOne({ email: email })

        if (checkEmailChange && checkEmailChange._id.toString() !== user._id.toString()) {
            throw new AppError("Este e-mail já está sendo utilizado por outro usuário!")
        }

        user.name = name ?? user.name
        user.email = email ?? user.email
        
        if (password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga para alterar para uma nova senha!")
        }

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if (!checkOldPassword) {
                throw new AppError("A senha antiga não confere!")
            }

            user.password = await hash(password, 8)
        }

        const updatedUser = await User.updateOne(
            { _id: user._id },
            { $set: { 
                name: user.name,
                email: user.email,
                password: user.password
            }}
        )

        if (!updatedUser) {
            throw new AppError("Usuário não foi alterado!")
        }

        return response.status(200).json({ message: "Usuário alterado com sucesso!" })
    }

    async delete(request, response) {
        const { id } = request.params

        const deletedUser = await User.findByIdAndDelete(id)

        if (!deletedUser) {
            throw new AppError("Usuário não foi encontrado!")
        }

        return response.status(200).json({ message: "Usuário deletado com sucesso!", user_deleted: deletedUser})
    }

    async show(request, response) {
        const { id } = request.params

        const user = await User.find({ _id: Types.ObjectId.createFromHexString(id) })
    
        if (!user) {
            throw new AppError("O usuário não foi encontrado!")
        }

        return response.status(200).json({ user })
    }

    async index(request, response) {
        const users = await User.find()

        return response.status(200).json({ users })
    }
}

module.exports = UsersController;
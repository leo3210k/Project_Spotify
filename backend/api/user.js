const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        try {
            existsOrError(user.username, 'Nome de usuário não informado')
            existsOrError(user.email, 'Email não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
            equalsOrError(user.password, user.confirmPassword,
                'Senhas não conferem')

            const emailFromDB = await app.db('users')
                .where({ email: user.email })
            const usernameFromDB = await app.db('users')
                .where({ username: user.username })
            if(!user.id) {
                notExistsOrError(emailFromDB, 'Email já cadastrado')
                notExistsOrError(usernameFromDB, 'Nome de usuário já usado')
            }
        } catch(msg) {
            res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send()) // Deu tudo certo!
                .catch(err => res.status(500).send(err)) // Erro do lado do servidor
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
        res.json(user)
    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'username', 'email', 'admin')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'username', 'email', 'admin')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    const remove = (req, res) => {
        try {
            const myMusics = app.db('mymusics')
                .where({ userId: req.params.id })
                .del()
            
            const rowsUpdated = app.db('users')
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })
            existsOrError(rowsUpdated, 'Usuário não encontrado.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
        res.json(req)
    }

    return { save, get, getById, remove }
}
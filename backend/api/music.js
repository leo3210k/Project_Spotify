module.exports = app => {
    const { existsOrError } = app.api.validation

    const save = async (req, res) => {
        const music = { ...req.body }
        if(req.params.id) music.id = req.params.id

        try {
            existsOrError(music.name, 'Nome não informado')
            existsOrError(music.content, 'Conteúdo não informado')
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(music.id) {
            app.db('musics')
                .update(music)
                .where({ id: music.id })
                .then(_ => res.status(204).send()) // Deu tudo certo!
                .catch(err => res.status(500).send(err)) // Erro do lado do servidor
        } else {
            app.db('musics')
                .insert(music)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
        res.json(music)
    }

    const get = (req, res) => {
        app.db('musics')
            .select('id', 'name', 'artistId')
            .then(musics => res.json(musics))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('musics')
            .select('id', 'name', 'artistId')
            .where({ id: req.params.id })
            .first()
            .then(music => res.json(music))
            .catch(err => res.status(500).send(err))
    }

    const remove = (req, res) => {
        try {
            const rowsUpdated = app.db('musics')
                .where({ id: req.params.id })
                .del()
            existsOrError(rowsUpdated, 'Música não encontrada.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
        res.json(req)
    }

    return { save, get, getById, remove }
}
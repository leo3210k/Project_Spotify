module.exports = app => {
  const { existsOrError } = app.api.validation

  const save = async (req, res) => {
      const artist = { ...req.body }
      if(req.params.id) artist.id = req.params.id

      try {
          existsOrError(artist.name, 'Nome não informado')
      } catch(msg) {
          res.status(400).send(msg)
      }

      if(artist.id) {
          app.db('artists')
              .update(artist)
              .where({ id: artist.id })
              .then(_ => res.status(204).send()) // Deu tudo certo!
              .catch(err => res.status(500).send(err)) // Erro do lado do servidor
      } else {
          app.db('artists')
              .insert(artist)
              .then(_ => res.status(204).send())
              .catch(err => res.status(500).send(err))
      }
      res.json(artist)
  }

  const get = (req, res) => {
      app.db('artists')
          .select('id', 'name')
          .then(artists => res.json(artists))
          .catch(err => res.status(500).send(err))
  }

  const getById = (req, res) => {
      app.db('artists')
          .select('id', 'name')
          .where({ id: req.params.id })
          .first()
          .then(artist => res.json(artist))
          .catch(err => res.status(500).send(err))
  }

  const remove = (req, res) => {
      try {
          const rowsUpdated = app.db('artists')
              .where({ id: req.params.id })
              .del()
          existsOrError(rowsUpdated, 'Artista não encontrado.')

          res.status(204).send()
      } catch(msg) {
          res.status(400).send(msg)
      }
      res.json(req)
  }

  return { save, get, getById, remove }
}
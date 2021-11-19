module.exports = app => {
  const { existsOrError } = app.api.validation

  const save = async (req, res) => {
      const album = { ...req.body }
      if(req.params.id) album.id = req.params.id

      try {
          existsOrError(album.name, 'Nome não informado')
      } catch(msg) {
          res.status(400).send(msg)
      }

      if(album.id) {
          app.db('albums')
              .update(album)
              .where({ id: album.id })
              .then(_ => res.status(204).send()) // Deu tudo certo!
              .catch(err => res.status(500).send(err)) // Erro do lado do servidor
      } else {
          app.db('albums')
              .insert(album)
              .then(_ => res.status(204).send())
              .catch(err => res.status(500).send(err))
      }
      res.json(album)
  }

  const get = (req, res) => {
      app.db('albums')
          .select('id', 'name', 'artistId')
          .then(albums => res.json(albums))
          .catch(err => res.status(500).send(err))
  }

  const getById = (req, res) => {
      app.db('albums')
          .select('id', 'name', 'artistId')
          .where({ id: req.params.id })
          .first()
          .then(album => res.json(album))
          .catch(err => res.status(500).send(err))
  }

  const remove = (req, res) => {
      try {
          const rowsUpdated = app.db('albums')
              .where({ id: req.params.id })
              .del()
          existsOrError(rowsUpdated, 'Album não encontrado.')

          res.status(204).send()
      } catch(msg) {
          res.status(400).send(msg)
      }
      res.json(req)
  }

  return { save, get, getById, remove }
}
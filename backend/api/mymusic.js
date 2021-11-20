module.exports = (app) => {
  const { existsOrError } = app.api.validation;

  const save = async (req, res) => {
    const mymusic = { ...req.body };

    mymusic.addAt = new Date();

    app.db("mymusics")
      .insert(mymusic)
      .then((_) => res.status(204).send())
      .catch((err) => res.status(500).send(err));

    res.json(mymusic);
  };

  const get = (req, res) => {
    app.db('mymusics')
        .select()
        .then(users => res.json(users))
        .catch(err => res.status(500).send(err))
    }

  const getById = (req, res) => {
    app.db("mymusics")
      .select("musicId", "addAt")
      .where({ userId: req.params.id })
      .then((mymusic) => res.json(mymusic))
      .catch((err) => res.status(500).send(err));
  };

  const remove = (req, res) => {
    try {
      const rowsUpdated = app.db("mymusics")
        .where({ id: req.params.id })
        .del();

      existsOrError(rowsUpdated, "Música não encontrada.");

      res.status(204).send();
    } catch (msg) {
      res.status(400).send(msg);
    }
    res.json(req);
  };

  return { save, get, getById, remove };
};

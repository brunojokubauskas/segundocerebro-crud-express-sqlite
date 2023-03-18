const { Router }  = require('express');

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.post("/:user_id", notesController.create.bind(notesController));
notesRoutes.get("/:id", notesController.show.bind(notesController));
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;

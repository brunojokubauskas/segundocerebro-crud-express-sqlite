const { Router }  = require('express');

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.post("/:user_id", NotesController.create);
notesRoutes.get("/:id", NotesController.show);
module.exports =  notesRoutes;

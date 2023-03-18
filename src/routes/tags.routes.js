const { Router }  = require('express');

const NotesController = require("../controllers/TagsController");

const tagssRoutes = Router();

const tagsController = new TagsController();
tagsRoutes.get("/:user_id", tagsController.index);

module.exports = tagsRoutes;

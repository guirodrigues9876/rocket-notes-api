const { Router } = require("express");
const NotesController = require("../controllers/NotesCrontroller")

const notesController = new NotesController();

const notesRoutes = Router();

notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);

module.exports = notesRoutes;
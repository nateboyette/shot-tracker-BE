const router = require("express").Router();

const Notes = require("../models/notes_model");

router.get("/", async (req, res) => {
  try {
    const notes = await Notes.getNotes();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;

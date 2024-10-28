import express from "express";
const router = express.Router();
import Game from "../models/gameSchema.mjs"; 

router.post("/", async (req, res) => {
  try {
    const newGame = new Game(req.body);
    await newGame.save();
    res.json(newGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error." });
  }
});


router.get("/", async (req, res) => {
  try {
    const allGames = await Game.find({});
    res.json(allGames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ msg: "Game not found." });
    }
    res.json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error." });
  }
});

router.get("/", async (req, res) => {
  try {
    const { genre, platform } = req.query;

    const filter = {};
    if (genre) filter.genre = genre;
    if (platform) filter.platform = platform;

    const filteredGames = await Game.find(filter);
    res.json(filteredGames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error." });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error." });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    res.json(deletedGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error." });
  }
});

export default router;

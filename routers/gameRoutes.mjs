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

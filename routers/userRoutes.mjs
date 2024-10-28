import express from "express";
import User from "../models/userSchema.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ msg: "Server error." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ msg: "Server error." });
  }
});

router.post("/:userId/favorites", async (req, res) => {
  try {
    const { gameId } = req.body;
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }

    user.favorites.push(gameId);
    await user.save();

    res.json({ msg: "Game added to favorites.", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }
    res.json({ msg: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ msg: "Server error." });
  }
});

export default router;

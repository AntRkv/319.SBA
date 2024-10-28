import express from "express";
import Review from "../models/reviewSchema.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find({})
      .populate("gameId", "title")
      .populate("userId", "username");
    res.json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ msg: "Server error." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate("gameId", "title")
      .populate("userId", "username");
    if (!review) {
      return res.status(404).json({ msg: "Review not found." });
    }
    res.json(review);
  } catch (error) {
    console.error("Error fetching review by ID:", error);
    res.status(500).json({ msg: "Server error." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { gameId, userId, reviewText, rating } = req.body;

    const review = new Review({
      gameId,
      userId,
      reviewText,
      rating,
    });

    await review.save();

    res.json({ msg: "Review added successfully.", review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error." });
  }
});

export default router;

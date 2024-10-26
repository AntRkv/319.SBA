import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
    enum: [
      "Action",
      "Adventure",
      "RPG",
      "Simulation",
      "Strategy",
      "Sports",
      "Puzzle",
      "Other",
      "Horror",
    ],
  },
  platform: {
    type: String,
    required: true,
    trim: true,
    enum: ["PC", "PlayStation", "Xbox", "Nintendo", "Mobile", "Other"],
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: null,
  },
});

gameSchema.index({ platform: 1 });
gameSchema.index({ genre: 1 });


export default mongoose.model("Game", gameSchema);

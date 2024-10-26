import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import gameRoutes from "./routers/gameRoutes.mjs";
import connectDB from "./DB/conn.mjs";
import Game from "./models/gameSchema.mjs";
import games from "./data/data.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/games", gameRoutes);

app.get("/seed", async (req, res) => {
  try {
    await Game.deleteMany();
    await Game.create(games);
    res.send("Seeding database completed");
  } catch (error) {
    console.error("Error seeding database:", error);
    res.status(500).send("Error seeding database");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

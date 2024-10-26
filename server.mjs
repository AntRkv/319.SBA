import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";


const app = express();
let PORT = process.env.PORT || 3001;
dotenv.config();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
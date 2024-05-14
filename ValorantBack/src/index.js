const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/valorantProjet"); // lien mongodb

const agentRouter = require("./routes/agentRouter");
const abilityRouter = require("./routes/abilityRouter");
const userRouter = require("./routes/userRouter");
const weaponRouter = require("./routes/weaponRouter");
const auth = require("./middlewares/auth");

app.get("/", (req, res) => {
  res.send("Welcome to valorant API !!");
});

app.use("/agent", agentRouter);
app.use("/ability", abilityRouter);
app.use("/weapon", weaponRouter);
app.use("/auth", userRouter);

app.listen(PORT, () => console.log(`serveur en ecoute sur le PORT ${PORT}`));

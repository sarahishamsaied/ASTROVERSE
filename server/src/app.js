require("dotenv").config();
const express = require("express");
const db = require("../models/index");
const cors = require("cors");

// const build = async () => {
//   console.log("articles here");
//   const res = await db.rockets.create({
//     rocket_name: "habala",
//     weight: 3,
//     capacity: 3,
//     rocket_type: "liquid",
//     thrust: 3,
//     fuel: "liquid",
//     velocity: 3,
//     mass: 3,
//     momentum: 3,
//   });
//   console.log("find");
//   const res2 = await db.rockets.findOne({ where: { id: 8000 } });
//   console.log(res2);
// };
db.sequelize.sync({ force: false }).then(function () {
  app.listen(process.env.DB_PORT, function () {
    console.log("server is successfully running!");
  });
});
// build();
const planetsRouter = require("./routes/planets/planets.router");
const rocketRouter = require("./routes/rockets/rockets.router");
const missionRouter = require("./routes/missions/missions.router");
const usersRouter = require("./routes/users/users.router");
const commentsRouter = require("./routes/comments/comments.router");
const announcementsRouter = require("./routes/announcements/announcements.router");
const articlesRouter = require("./routes/articles/articles.router");
const tasksRouter = require("./routes/tasks/tasks.router");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/api/planets", planetsRouter);
app.use("/api/rockets", rocketRouter);
app.use("/api/missions", missionRouter);
app.use("/api/users", usersRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/announcements", announcementsRouter);
app.use("/api/articles", articlesRouter);
app.use("/api/tasks", tasksRouter);
app.get("/", (req, res) => {
  res.json("Hello World!");
});

module.exports = app;

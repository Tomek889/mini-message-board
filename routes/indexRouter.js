const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("home"));

indexRouter.get("/{*splat}", (req, res) => {
  res.send("Not found (404 error).");
});

module.exports = indexRouter;

const { Router } = require("express");
const indexRouter = Router();
const path = require("node:path");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "How's it going?",
    user: "Tina",
    added: new Date(),
  },
  {
    text: "Anyone up for coffee?",
    user: "Raj",
    added: new Date(),
  },
  {
    text: "Just finished my homework!",
    user: "Lena",
    added: new Date(),
  },
  {
    text: "Node.js is awesome 😎",
    user: "Carlos",
    added: new Date(),
  },
  {
    text: "Can't wait for the weekend!",
    user: "Zoe",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const messageName = req.body.messageName;
  const messageText = req.body.messageText;
  messages.push({ text: messageText, user: messageName, added: new Date() });
  res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
  const message = messages[parseInt(req.params.id)];
  if (!message) return res.status(404).send("Message not found");
  res.render("message", { title: "Message Details", message });
});

indexRouter.get("/{*splat}", (req, res) => {
  res.send("Not found (404 error).");
});

module.exports = indexRouter;

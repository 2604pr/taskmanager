// routes/taskRoutes.js
const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// Get all tasks
router.get("/", async (_, res) => {
  res.json(await Task.find());
});

// Add task
router.post("/", async (req, res) => {
  const task = await Task.create({ title: req.body.title });
  res.status(201).json(task);
});

// Toggle task
router.put("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

// Delete task
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;

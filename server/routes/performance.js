const express = require("express");
const router = express.Router();
const Review = require("../models/ReviewSchema");
const DevelopmentPlan = require("../models/DevelopmentPlanSchema");
const Goal = require("../models/GoalSchema");

router.post("/goals", async (req, res) => {
  const goal = new Goal(req.body);
  await goal.save();
  res.send(goal);
});

router.get("/goals", async (req, res) => {
  const goals = await Goal.find();
  res.send(goals);
});

router.post("/reviews", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.send(review);
});

router.get("/reviews", async (req, res) => {
  const reviews = await Review.find();
  res.send(reviews);
});

router.post("/development-plans", async (req, res) => {
  const plan = new DevelopmentPlan(req.body);
  await plan.save();
  res.send(plan);
});

router.get("/development-plans", async (req, res) => {
  const plans = await DevelopmentPlan.find();
  res.send(plans);
});

module.exports = router;

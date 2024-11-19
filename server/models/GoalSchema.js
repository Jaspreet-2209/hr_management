const mongoose = require("mongoose");
const { Schema } = mongoose;

const GoalSchema = new Schema({
  employeeId: String,
  description: String,
  status: String,
  targetDate: Date,
});

const Goal = mongoose.model("goal", GoalSchema);
module.exports = Goal;

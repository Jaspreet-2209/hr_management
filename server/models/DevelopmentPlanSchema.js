const mongoose = require("mongoose");
const { Schema } = mongoose;

const DevelopmentPlanSchema = new Schema({
  employeeId: String,
  description: String,
  status: String,
  targetDate: Date,
});

const DevelopmentPlan = mongoose.model(
  "developmentPlan",
  DevelopmentPlanSchema
);
module.exports = DevelopmentPlan;

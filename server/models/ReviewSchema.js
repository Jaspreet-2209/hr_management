const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  employeeId: String,
  description: String,
  status: String,
  targetDate: Date,
});

const Review = mongoose.model("review", ReviewSchema);
module.exports = Review;

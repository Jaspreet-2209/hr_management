const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  checkInTime: { type: Date },
  checkOutTime: { type: Date },
  location: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);

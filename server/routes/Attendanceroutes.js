const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

// Check-in endpoint
router.post("/checkin", async (req, res) => {
  const { userId, latitude, longitude } = req.body;

  try {
    const attendance = new Attendance({
      userId,
      checkInTime: new Date(),
      location: { latitude, longitude },
    });

    await attendance.save();
    res.status(200).json({ message: "Check-in successful", attendance });
  } catch (error) {
    res.status(500).json({ message: "Error checking in", error });
  }
});

// Check-out endpoint
router.post("/checkout", async (req, res) => {
  const { userId } = req.body;

  try {
    const attendance = await Attendance.findOne({ userId, checkOutTime: null });
    if (attendance) {
      attendance.checkOutTime = new Date();
      await attendance.save();
      res.status(200).json({ message: "Check-out successful", attendance });
    } else {
      res.status(404).json({ message: "User not checked in" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error checking out", error });
  }
});

module.exports = router;

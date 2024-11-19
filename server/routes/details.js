const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const EmpDetail = require("../models/detailschema");

router.post("/createemployee", async (req, res) => {
  const { base64 } = req.body;

  let success = false;
  //If there are errors return bad rquest and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  //check whether the user with this email already exists
  try {
    let user = await EmpDetail.findOne({ empID: req.body.empID });
    if (user) {
      return res
        .status(400)
        .json({
          success,
          error: "Sorry a user with this email already exists",
        });
    } else {
      //create a new user
      user = await EmpDetail.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        empID: req.body.empID,
        email: req.body.email,
        jobrole: req.body.jobrole,
        salary: req.body.salary,
        account_no: req.body.acccount_no,
        IFSC_code: req.body.IFSC_code,
        performance_appraisal: req.body.performance_appraisal,
        company_ex: req.body.company_ex,
        date_of_joining: req.body.date_of_joining,
        phoneno: req.body.phoneno,
        image: base64,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      success = true;
      res.json({ success});
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
});

router.get("/getdetails", async (req, res) => {
  try {
    const empId = req.query.userId;
    const data = await EmpDetail.find().then((data) => {
      res.send({ data: data });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
});

module.exports = router;

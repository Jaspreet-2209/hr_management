require("dotenv").config();
const port = process.env.PORT || 8080;
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const connecttomongo = require("./models/db");
connecttomongo();

app.get("/", (req, resp) => {
  resp.send("Hello world");
});
app.use(express.json());

app.use("/performance", require("./routes/performance"));
app.use("/attendance", require("./routes/Attendanceroutes"));
app.use("/reg", require("./routes/auth"));
app.use("/details", require("./routes/details"));

app.listen(port, function () {
  console.log("Server started on port " + port);
});

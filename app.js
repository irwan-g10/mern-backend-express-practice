const express = require("express");
const bodyParser = require("body-parser");

const placesRouter = require("./routes/places-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRouter);
app.use((err, req, res, next) => {
  res.status(err.code || 500);
  res.json({ message: err.message || "An Unknown Error occured!" });
});

app.listen(3000);

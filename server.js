const express = require("express");
const simulation = require('./api/routes/simulation');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/simulation", simulation);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port, () => console.log("Server listening on port " + port));

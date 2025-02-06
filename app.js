const express = require('express');

const logger = require('morgan');
const cors = require("cors");
const numberService = require("./services/numbers.service");


const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;


  if (!number || isNaN(number)) {
      return res.status(400).json({
          number: number || "undefined",
          error: true
      });
  }

  try {
      const result = await numberService.classifyNumber(Number(number));
      res.status(200).json(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use(function(req, res, next) {
  res.status(404).send("Page not found")
});


module.exports = app;

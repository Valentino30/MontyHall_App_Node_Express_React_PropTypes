const express = require("express");
const simulationController = require("../controllers/simulation");

const router = express.Router();

router.get("/", simulationController.getResult);

module.exports = router;

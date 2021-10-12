const express = require("express"),
  router = express.Router(),
  ventasController = require("../controllers/ventas.controller");

// crear nuevo recurso
router.post("/", ventasController.create);

module.exports = router;

const express = require("express"),
  router = express.Router(),
  ventasController = require("../controllers/ventas.controller");

// crear nuevo recurso
router.post(
  "/", 
  ventasController.create
);

/** Obtiene un recurso por su ID */
router.get(
  "/:id",
  ventasController.getById
);

module.exports = router;

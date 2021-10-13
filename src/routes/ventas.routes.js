const express = require("express"),
  router = express.Router(),
  ventasController = require("../controllers/ventas.controller");

// crear nuevo recurso
router.post(
  "/", 
  ventasController.create
);

/** Obtiene todos los recursos */
router.get(
  "/",
  ventasController.getAll
);

/** Obtiene un recurso por su ID */
router.get(
  "/:id",
  ventasController.getById
);

/** Actualiza un recurso */
router.put(
  "/:id",
  ventasController.update
)


module.exports = router;

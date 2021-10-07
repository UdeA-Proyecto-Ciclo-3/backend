const express = require("express"),
  router = express.Router(),
  productosController = require("../controllers/productos.controller"); // Controller

/** Crea nuevo recurso */
router.post(
  "/", // Path
  productosController.create // Run controller functionality
);

/** Obtiene todos los recursos */
router.get(
  "/", // Path
  productosController.getAll // Run controller functionality
);

/** Obtiene un recurso por su ID */
router.get(
  "/:id", // Path
  productosController.getById // Run controller functionality
);

/** Actualiza un recurso */
router.put(
  "/:id", // Path: ID del recurso
  productosController.update // Run controller functionality
);

/** Elimina un recurso */
router.delete(
  "/:id", // Path: ID del recurso
  productosController.delete // Run controller functionality
);

module.exports = router;

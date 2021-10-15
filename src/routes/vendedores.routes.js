const express = require("express"),
    router = express.Router(),
    vendedoresController = require("../controllers/vendedores.controller");

// crear nuevo recurso
router.post(
  "/", 
  vendedoresController.create
);

/** Obtiene todos los recursos */
router.get(
    "/",
    vendedoresController.getAll
)

/** Obtiene un recurso por su ID */
router.get(
  "/:id",
  vendedoresController.getById
);

module.exports = router;
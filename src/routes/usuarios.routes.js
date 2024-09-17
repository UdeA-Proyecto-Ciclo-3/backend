const
    express = require("express"),
    router = express.Router(),
    usuariosController = require("../controllers/usuario.controller"); // Controller

/** Crea nuevo recurso */
router.post(
    "/", // Path
    usuariosController.create // Run controller functionality
);

/** Obtiene todos los recursos */
router.get(
    "/", // Path
    usuariosController.getAll // Run controller functionality
);

/** Obtiene un recurso por su ID */
router.get(
    "/:id", // Path
    usuariosController.getById // Run controller functionality
);

/** Actualiza un recurso */
router.put(
    "/:id", // Path: ID del recurso
    usuariosController.update // Run controller functionality
);

/** Elimina un recurso */
router.delete(
    "/:id", // Path: ID del recurso
    usuariosController.delete // Run controller functionality
);

module.exports = router;

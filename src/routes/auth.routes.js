const express = require("express"),
  router = express.Router(),
  authController = require("../controllers/auth.controller"); // Controller

/** Crea nuevo recurso */
router.post(
  "/google-login", // Path
  authController.googleLogin // Run controller functionality
);

module.exports = router;
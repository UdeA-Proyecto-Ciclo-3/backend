const Usuario = require("../models/Usuario");

/** Crea nuevo recurso */
exports.create = (request, response) => {
    console.log("POST /api/usuarios");
    response.json("POST /api/usuarios");
};

/** Obtiene todos los recursos */
exports.getAll = (request, response) => {
    console.log("GET /api/usuarios");
    response.json("GET /api/usuarios");
};

/** Obtiene un recurso por su ID */
exports.getById = (request, response) => {
    console.log("GET /api/usuarios");
    response.json("GET /api/usuarios");
};

/** Actualiza un recurso */
exports.update = (request, response) => {
    console.log("PUT /api/usuarios");
    response.json("PUT /api/usuarios");
};

/** Elimina un recurso */
exports.delete = (request, response) => {
    console.log("DELETE /api/usuarios");
    response.json("DELETE /api/usuarios");
};

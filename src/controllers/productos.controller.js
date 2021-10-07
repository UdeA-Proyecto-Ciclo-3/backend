/** Crea nuevo recurso */
exports.create = (request, response) => {
  console.log("POST /api/productos");
  response.json("POST /api/productos");
};

/** Obtiene todos los recursos */
exports.getAll = (request, response) => {
  console.log("GET /api/productos");
  response.json("GET /api/productos");
};

/** Obtiene un recurso por su ID */
exports.getById = (request, response) => {
  console.log("GET /api/productos");
  response.json("GET /api/productos");
};

/** Actualiza un recurso */
exports.update = (request, response) => {
  console.log("PUT /api/productos");
  response.json("PUT /api/productos");
};

/** Elimina un recurso */
exports.delete = (request, response) => {
  console.log("DELETE /api/productos");
  response.json("DELETE /api/productos");
};

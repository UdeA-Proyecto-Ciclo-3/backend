const Usuario = require("../models/Usuario");

/** Crea nuevo recurso */
exports.googleLogin = async (request, response) => {
    const { tokenId } = request .body;

    console.log( 'tokenId', tokenId );

    response .json( 'googleLogin' );
};
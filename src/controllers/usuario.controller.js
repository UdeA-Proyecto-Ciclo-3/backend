const bcrypt = require( 'bcryptjs' );

const Usuario = require("../models/Usuario");

/** Crea nuevo recurso */
exports.create = async ( request, response ) => {
    const { correo, contrasena } = request .body;      // Destructuring

    try {
        let user = await Usuario .findOne({ correo });  // Query using Mongoose

        /** Valida si el usuario ya existe */
        if( user ) {
            return response .status( 400 ) .json({
                registra: false,
                error: {
                    mensaje: 'El usuario ya existe!'
                }
            });
        }

        /** Inicia proceso de registro del usuario */
        const salt = await bcrypt .genSalt( 10 );

        user = new Usuario( request .body );                            // Crea 'usuario' usando el Modelo e inserta los datos.
        user .contrasena = await bcrypt .hash( contrasena, salt );
             // Encripta la contraseña
        const newUser = await user .save();    // Registra los datos del usuario en MongoDB usando Mongoose.

        console.log( newUser );

        delete newUser[ 'contrasena' ];

        response .json({
            registra: true,
            mensaje: 'Usuario registrado correctamente!',
            nuevoUsuario: newUser
        });


    } catch ( error ) {
        console .log( error );
        response .status( 400 ) .json({
            registra: false,
            error: {
                mensaje: 'El usuario no ha podido ser registrado!'
            }
        });
    }
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

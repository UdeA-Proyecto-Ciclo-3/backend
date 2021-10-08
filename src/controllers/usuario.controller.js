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

        delete newUser.contrasena;

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
exports.getAll = async ( request, response ) => {

    try {
        const users = await Usuario .find() .select( '-contrasena' );

        response .json({
            registra: true,
            mensaje: 'Obtiene todos los registros correctamente!',
            cantidad: users .length,
            usuarios: users
        });

    } catch ( error ) {
        console .log( error );
        response .status( 500 ) .json({
            registra: false,
            error: {
                message: 'No se han podido obtener los registros de usuario!'
            }
        });
    }
};

/** Obtiene un recurso por su ID */
exports.getById = async ( request, response ) => {

    const user_id = request .params .id;

    try {
        const user = await Usuario .findById( user_id ) .select( '-contrasena' );

        console.log( user );

        response .json({
            registra: true,
            mensaje: `Obtiene el registro con id ${ user_id }`,
            usuario: user
        });

    } catch ( error ) {
        console .log( error );
        response .status( 500 ) .json({
            registra: false,
            error: {
                mensaje: `No existe el registro con id ${ user_id }!`
            }
        });
    }
};

/** Actualiza un recurso */
exports.update = async ( request, response ) => {

    const
        user_id = request .params .id,
        newUserData = request .body;

    console.log( user_id );

    try {
        const user = await Usuario .findById( user_id );

        /** Valida si NO existe el usuario */
        if( ! user ) {
            return response .status( 404 ) .json({
                registra: false,
                error: {
                    mensaje: `No existe el registro con id ${ user_id }!`
                }
            });
        }

        /** Actualiza Usuario */
        const updatedUser = await Usuario .findOneAndUpdate({ _id: user_id }, newUserData, { new: true } );      // Pasa como parámetro el ID de la Tarea al método de Mongoose.

        console.log( updatedUser );

        response .json({
            registra: true,
            mensaje: `Actualiza registro con id ${ user_id } correctamente!`,
            usuario: updatedUser
        });

    } catch (error) {
        console .log( error );
        response .status( 500 ) .json({
            success: false,
            error: {
                mensaje: `No se ha podido actualizar el registro con id ${ user_id }!`
            }
        });
    }

};

/** Elimina un recurso */
exports.delete = async ( request, response ) => {

    const user_id = request .params .id;

    try {
        const user = await Usuario .findById( user_id );

        /** Valida si NO existe el usuario */
        if( ! user ) {
            return response .status( 404 ) .json({
                registra: false,
                error: {
                    mensaje: `No existe el registro con id ${ user_id }!`
                }
            });
        }

        /** Elimina el usuario */
        const deletedUser = await Usuario .findOneAndDelete({ _id: user_id }, { new: true } );      // Pasa como parámetro el ID de la Tarea al método de Mongoose.

        response .json({
            registra: true,
            mensaje: `Elimina registro con id ${ user_id } correctamente!`,
            usuario: deletedUser
        });

    } catch ( error ) {
        console .log( error );
        response .status( 500 ) .json({
            success: false,
            error: {
                mensaje: `No se ha podido eliminar el registro con id ${ user_id }!`
            }
        });
    }

};

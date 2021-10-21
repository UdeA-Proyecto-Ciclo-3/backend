const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const ConnectDatabase = () => {

    mongoose.connect( process.env.DB_MONGO_ATLAS );

    // mongoose.set('useNewUrlParser', true);
    // mongoose.set('useFindAndModify', false);
    // mongoose.set('useCreateIndex', true);

    mongoose.connection.once( 'open', () => {
      console.log( 'MongoDB Connected' );
    });
    mongoose.connection.on( 'error', (err) => {
      console.log( 'MongoDB connection error: ', err );
    });

};

module.exports = ConnectDatabase;

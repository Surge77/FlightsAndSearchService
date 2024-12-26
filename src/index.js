//The core purpose of the index.js is to boot up the server

const express = require("express"); // Import the Express library

const { PORT } = require('./config/serverConfig'); // Import PORT from serverConfig.js
const bodyParser = require("body-parser");

const setupAndStartServer  = async () => {

    //create the express object or instance
    const app = express();

    //Middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);
    }); 
}

setupAndStartServer();
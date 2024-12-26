
//By creating a separate file (let's say serverConfig.js or env.js), you can manage environment variables in one place. 
//This makes it easier to reference and update them across your entire application.
//By using a dedicated file for environment variables, you create a modular, flexible, and maintainable structure that can easily adapt to changes as your project grows.


const dotenv = require('dotenv'); // imports the dotenv module

dotenv.config(); // Loads environment variables from .env file

module.exports = {
    PORT : process.env.PORT // Exports the PORT variable from environment which is the .env file
}
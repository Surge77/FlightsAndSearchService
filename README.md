# Welcome to Flights service

## Project Setup

- Clone the project on your local machine
- Execute 'npm install' on the same path as of your root directory of the downloaded project
- Create a '.env' file in the root directory and add the following environment variable
  - 'PORT=3000'
- Inside the 'src/config' folder create a new file 'config.json' and then add the following piece of json 

```JSON

{
  "development": {
    "username": "<Your_DB_LOGIN_NAME>",
    "password": "<Your_DB_Password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```




This is the project structure
Here we are doing role based development and not feature based 
In role based we store all models in models folder all controllers in controller and so on..

    - src/
      - index.js //server
      - models/
      - controllers/
      - middlewares/
      - services
      - utils
      - config/
      - repository/
  - tests/ [later]




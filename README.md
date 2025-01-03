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

- Once you've added your db config as listed above, go to the src folder from your terminal and execute 'npx sequelize db:create'

and then execute `npx sequelize db:migrate`



## DB Design 
  - Airplane Table
  - Flight
  - Airport
  - City

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one airport




module.exports = {
  "development": {
    "username": "marrikang",
    "password": null,
    "database": "stone-soup",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "marrikang",
    "password": null,
    "database": "stone-soup",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "marrikang",
    "password": null,
    "database": "stone-soup",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging": false,
        "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false 
      }
    },
    "use_env_variable": "DATABASE_URL"
  }
}

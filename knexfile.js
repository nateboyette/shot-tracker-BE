// Update with your config settings.
require("dotenv").config();
const pg = require("pg");

pg.defaults.ssl = true;

const localPGConnection = {
  host: "localhost",
  database: "postgres",
  user: "postgres",
  password: process.env.PG_PW
};

const prodDbConnection = process.env.DATABASE_URL || localPGConnection;

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_DEV_URL,
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "pg",
    connection: prodDbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};

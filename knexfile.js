// Update with your config settings.
require("dotenv").config();
const pg = require("pg");

pg.defaults.ssl = true;

const localPGConnection = {
  host: "127.0.0.1",
  user: "postgres",
  password: process.env.PG_PW,
  database: "shot_tracker"
};

const prodDbConnection = process.env.DATABASE_URL || localPGConnection;

module.exports = {
  development: {
    client: "pg",
    connection: prodDbConnection,
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/shotTrackerTestDB.db3"
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "postgresql",
    connection: prodDbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};

const fake = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email()
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email()
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email()
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email()
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email()
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email()
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email()
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email()
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email()
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email()
        }
      ]);
    });
};

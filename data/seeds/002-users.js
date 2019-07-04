const fake = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 1,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: 2,
          company_id: 1
        }
      ]);
    });
};

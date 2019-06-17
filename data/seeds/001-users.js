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
          email: fake.internet.email(),
          userType_id: fake.random.number(3),
          company_id: fake.random.number(3)
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: fake.random.number(3),
          company_id: fake.random.number(3)
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: fake.random.number(3),
          company_id: fake.random.number(3)
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: fake.random.number(3),
          company_id: fake.random.number(3)
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: fake.random.number(3),
          company_id: fake.random.number(3)
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: fake.random.number(3),
          company_id: fake.random.number(3)
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: fake.random.number(3),
          company_id: fake.random.number(3)
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: fake.random.number(3),
          company_id: fake.random.number(3)
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: fake.random.number(3),
          company_id: fake.random.number(3)
        },
        {
          firstName: fake.name.firstName(),
          lastName: fake.name.lastName(),
          email: fake.internet.email(),
          userType_id: fake.random.number(3),
          company_id: fake.random.number(3)
        }
      ]);
    });
};

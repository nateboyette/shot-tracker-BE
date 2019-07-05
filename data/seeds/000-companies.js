const fake = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("companies")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("companies").insert([
        {
          company_name: fake.company.companyName(),
          street_number: fake.random.number(9999),
          address: fake.address.streetName(),
          city: fake.address.city(),
          state: fake.address.stateAbbr(),
          zip: fake.address.zipCode(),
          phone: fake.phone.phoneNumber()
        },
        {
          company_name: fake.company.companyName(),
          street_number: fake.random.number(9999),
          address: fake.address.streetName(),
          city: fake.address.city(),
          state: fake.address.stateAbbr(),
          zip: fake.address.zipCode(),
          phone: fake.phone.phoneNumber()
        },
        {
          company_name: fake.company.companyName(),
          street_number: fake.random.number(9999),
          address: fake.address.streetName(),
          city: fake.address.city(),
          state: fake.address.stateAbbr(),
          zip: fake.address.zipCode(),
          phone: fake.phone.phoneNumber()
        }
      ]);
    });
  a;
};

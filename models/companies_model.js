const db = require("../data/dbConfig");

module.exports = {
  getAllCompanies,
  getCompanyById,
  createCompany,
  deleteCompany
};

function getAllCompanies() {
  return db("companies");
}

function getCompanyById(id) {
  return db("companies")
    .where("companies.company_id", id)
    .first();
}

function createCompany(company) {
  return db("companies").insert(company);
}

function deleteCompany(id) {
  return db("companies")
    .where("company_id", id)
    .del();
}

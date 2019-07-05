const router = require("express").Router();

const Companies = require("../models/companies_model");

router.get("/", async (req, res) => {
  try {
    const companies = await Companies.getAllCompanies();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const company = await Companies.getCompanyById(id);

    if (company === undefined) {
      return res
        .status(400)
        .json({ message: "The company specified does not exist." });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

router.post("/create-company", async (req, res) => {
  const { company_name } = req.body;

  if (company_name === undefined) {
    res.status(400).json({ message: "Please include the company name." });
  }

  try {
    await Companies.createCompany(req.body);

    res.status(201).json({ message: "Company created successfully." });
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    res.status(400).json({
      message: "There was an error while attempting to delete this company."
    });
  }

  try {
    const company = await Companies.getCompanyById(id);

    if (company === undefined) {
      return res.status(400).json({ message: "This company does not exist." });
    }

    await Companies.deleteCompany(id);

    res
      .status(200)
      .json({ message: "The company has been successfully deleted." });
  } catch (error) {
    res.status(500).json({ message: "A network error occurred" });
  }
});

module.exports = router;

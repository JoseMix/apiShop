const express = require("express");
const router = express.Router();
const customerModel = require("../model/customer");
const {
  validationRules,
  validationCheck,
} = require("../helpers/dataValidator");

const {
  addCustomer,
  getAllCustomers,
  getCustomerByEmail,
  deleteCustomerByEmail,
  updateCustomerByEmail,
} = require("../controllers/customer");

router.get("/", getAllCustomers);
router.post("/", validationRules, validationCheck, addCustomer);

router.get("/:email", getCustomerByEmail);
router.put("/:email", validationRules, validationCheck, updateCustomerByEmail);
router.delete("/:email", deleteCustomerByEmail);

module.exports = router;

//JoseMi Silva

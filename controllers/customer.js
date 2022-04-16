const {
  createCustomerInstance,
  customerExists,
} = require("../helpers/helperFunctions");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://mongo/shop";

const client = new MongoClient(url);
//addCustomer checks if user already exists, if not, inserts in db
const addCustomer = async (req, res) => {
  try {
    let customer = await customerExists(req.body.email);
    if (!customer) {
      await client.connect();
      const customerInstance = createCustomerInstance(req.body);
      const result = await client
        .db("shop")
        .collection("customers")
        .insertOne(customerInstance);
      res.status(200).json(result);
    } else {
      res.status(200).json("Email already registered");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllCustomers = async (req, res) => {
  try {
    await client.connect();
    const result = await client
      .db("shop")
      .collection("customers")
      .find({})
      .toArray();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

getCustomerByEmail = async (req, res) => {
  try {
    let emailToSearch = req.params.email;
    await client.connect();
    const result = await client
      .db("shop")
      .collection("customers")
      .find({ email: emailToSearch });
    if (!result) {
      res.status(404).send("Customer not available");
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

deleteCustomerByEmail = async (req, res) => {
  try {
    let emailToSearch = req.params.email;
    await client.connect();
    const result = await client
      .db("shop")
      .collection("customers")
      .findOneAndDelete({ email: emailToSearch });

    if (!result.value) {
      res.status(404).json("Customer not found");
    }
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
updateCustomerByEmail = async (req, res) => {
  try {
    let emailToSearch = req.params.email;
    await client.connect();
    const { _id } = await client
      .db("shop")
      .collection("customers")
      .findOne({ email: emailToSearch });

    const result = await client.db("shop").collection("customers").replaceOne(
      { _id: _id },
      {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        birthdate: req.body.birthdate,
      }
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addCustomer,
  getAllCustomers,
  getCustomerByEmail,
  deleteCustomerByEmail,
  updateCustomerByEmail,
};

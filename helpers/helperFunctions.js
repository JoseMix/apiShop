const customerModel = require("../model/customer");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://mongo/shop";
const client = new MongoClient(url);

const createCustomerInstance = (body) => {
  const customerInstance = new customerModel(
    body.name,
    body.surname,
    body.email,
    body.birthdate
  );
  return customerInstance;
};

const customerExists = async (email) => {
  await client.connect();
  return await client.db("shop").collection("customers").findOne({ email });
};
module.exports = { createCustomerInstance, customerExists };

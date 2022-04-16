const { request } = require("express");
const supertest = require("supertest");

const { app, server } = require("../app");

const api = supertest(app);
//Get All Customers
test("All customers are returned as json format", async () => {
  await api
    .get("/v1/customers")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});
//Post a Customer
test("Should create a new customer", async () => {
  await api.post("/v1/customers").send({
    name: "name",
    surname: "surname",
    email: "email",
    birthdate: "01/01/2021",
  });
  expect(200);
});

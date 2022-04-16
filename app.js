const express = require("express");
const app = express();
const port = 3000;
const customerRoute = require("./routes/customers");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json("Welcome to Code Sherpas API Shop");
});

app.use("/v1/customers", customerRoute);

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
module.exports = { app, server };

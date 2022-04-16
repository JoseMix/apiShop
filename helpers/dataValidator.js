const { body, validationResult } = require("express-validator");
//Checks if is a valid email, and name, surname length
const validationRules = [
  body("email").isEmail(),
  body("name").isLength({
    min: 4,
    max: 12,
  }),
  body("surname").isLength({
    min: 4,
    max: 12,
  }),
];

const validationCheck = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
module.exports = { validationRules, validationCheck };

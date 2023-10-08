const { body } = require("express-validator");

const userRegisterValidationRules = () => {
  return [
    body("username")
      .notEmpty()
      .isLength({ min: 3, max: 20 })
      .withMessage("Username must be between 3 and 20 characters"),

    body("password")
      .notEmpty()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password must be between 8 and 20 characters"),

    body("email").notEmpty().isEmail().withMessage("Invalid email address"),
  ];
};

const userLoginValidationRules = () => {
  return [
    body("email").notEmpty().isEmail().withMessage("Invalid email address"),

    body("password")
      .notEmpty()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password must be between 8 and 20 characters"),
  ];
};

module.exports = {
  userRegisterValidationRules,
  userLoginValidationRules,
};

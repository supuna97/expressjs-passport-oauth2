const express = require("express");
const router = express.Router();

//Controllers
const authController = require("../controllers/authController");

//Validations
const {
  userRegisterValidationRules,
  userLoginValidationRules,
} = require("../rules/authRule");

router.post(
  "/register",
  userRegisterValidationRules(),
  authController.register
);
router.post("/login", userLoginValidationRules(), authController.login);

module.exports = router;

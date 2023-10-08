const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authController = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({ username, email, password });

      res.status(201).json({ user: user, message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error registering user" });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Generate a JWT token upon successful login
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET, {
        expiresIn: "1h",
      });

      res.status(200).json({ token: token, message: "User logged successfully" });
    } catch (error) {
      res.status(500).json({ message: "Login failed" });
    }
  },
};

module.exports = authController;

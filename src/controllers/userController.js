const User = require("../models/user");

const userController = {
  // Get logged user details
  get: async (req, res) => {
    try {
      const user = await User.findById(req.user.userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const userDetails = {
        id: user.id,
        username: user.username,
        email: user.email,
      };

      res.status(200).json({ userDetails });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
};

module.exports = userController;

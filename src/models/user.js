const { DataTypes } = require("sequelize");
const db = require("../config/database");
const bcrypt = require("bcrypt");

const User = db.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users", // Specify your custom table name here
  }
);

// Hash the user's password before saving it to the database
User.beforeCreate(async (user) => {
  const saltRounds = 10;
  user.password = await bcrypt.hash(user.password, saltRounds);
});

module.exports = User;

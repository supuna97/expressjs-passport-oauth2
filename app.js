const express = require("express");
const passport = require("passport");
const session = require("express-session");

const authenticateToken = require("./middleware/token-authentication");
const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/api-v1");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  session({
    secret: process.env.APP_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes); // Define OAuth2 authentication routes
app.use("/api/v1", authenticateToken, apiRoutes); // Protect the API routes with token-based authentication middleware

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

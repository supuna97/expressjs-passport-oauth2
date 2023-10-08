const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require('cors');
const bodyParser = require('body-parser');

const authenticateToken = require("./src/middleware/tokenAuthentication");
const authRoutes = require("./src/routes/auth");
const apiRoutes = require("./src/routes/api-v1");

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors()); // Allow all origins (not recommended for production)

app.use(
  session({
    secret: process.env.APP_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/v1/auth", authRoutes); // Define OAuth2 authentication routes
app.use("/v1", authenticateToken, apiRoutes); // Protect the API routes with token-based authentication middleware

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

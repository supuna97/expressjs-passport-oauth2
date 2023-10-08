# Express with passport Oauth2
## Description
This is a simple example of how to use passport with oauth2. It uses the google strategy to authenticate users.
## Installation
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root directory and add the following variables:
```bash
NODE_ENV=development
PORT=3000
APP_SECRET=your_app_secret

# Database
DB_HOST=localhost
DB_PORT=3306
DB_CONNECTION=mysql
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name

# Google Oauth2
OAUTH2_AUTHORIZATION_URL=https://accounts.google.com/o/oauth2/v2/auth
OAUTH2_TOKEN_URL=https://oauth2.googleapis.com/token
AUTH_CLIENT_ID=your_client_id
AUTH_CLIENT_SECRET=your_client_secret
AUTH_CALLBACK_URL=http://localhost:3000/auth/google/callback
```
4. Run `npm start`
5. Open your browser and go to `http://localhost:3000`

## License
[MIT](https://choosealicense.com/licenses/mit/)
```

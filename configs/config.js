// Production
// const NODE_ENV = 'production';

// Local-Development
const NODE_ENV = "local-development";

// System Server URL
const PROD_SERVER_URL = "";
const LOCAL_DEV_SERVER_URL = "http://localhost:4242";

// System Client URL
const PROD_CLIENT_URL = "";
const LOCAL_DEV_CLIENT_URL = "http://localhost:3000";

// MongoDB
const MONGODB = "mongodb+srv://ql2326:123456Lqc@atlascluster.niwmwaj.mongodb.net/?retryWrites=true&w=majority";
const DATABASE = "loginSystem";

// Google Authentication
const GOOGLE_CALLBACK_URL =
  "http://localhost:4242/api/login/auth/google/callback";
const GOOGLE_CLIENT_ID = "your google client id";
const GOOGLE_CLIENT_SECRET = "your google secret";

// Cookie Domain
const PROD_COOKIE_DOMAIN = "";
const LOCAL_COOKIE_DOMAIN = "localhost";

// Session Secret
const SESSION_SECRET = "shuanqbaby";

const SERVER_URL =
  NODE_ENV === "production" ? PROD_SERVER_URL : LOCAL_DEV_SERVER_URL;
const CLIENT_URL =
  NODE_ENV === "production" ? PROD_CLIENT_URL : LOCAL_DEV_CLIENT_URL;
const COOKIE_DOMIAN =
  NODE_ENV === "production" ? PROD_COOKIE_DOMAIN : LOCAL_COOKIE_DOMAIN;

module.exports = {
  NODE_ENV,
  SERVER_URL,
  CLIENT_URL,
  MONGODB,
  DATABASE,
  GOOGLE_CALLBACK_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  SESSION_SECRET,
  COOKIE_DOMIAN,
};

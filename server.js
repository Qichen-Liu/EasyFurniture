require("dotenv").config();
require("./configs/MongoDBConfig");
const cors = require("cors");
const express = require("express");
const passport = require("./service/passportService");
const session = require("express-session");
const {
  CLIENT_URL,
  NODE_ENV,
  SESSION_SECRET,
  COOKIE_DOMIAN,
  MONGODB,
} = require("./configs/config");
const MongoDBStore = require("connect-mongodb-session")(session);

// ------- require routes ------
// const FurnitureRoute = require("./routes/furnitureRoute");
const LoginRoute = require("./routes/loginRoute");

const app = express();

// ------ CORS ------
app.enable("trust proxy");
app.use(
  cors({
    origin:
      NODE_ENV === "production"
        ? CLIENT_URL
        : function (origin, callback) {
            return callback(null, true);
          },
    methods: "GET, PUT, POST, DELETE",
    credentials: true, // Allow credentials (cookies)
  }),
);

app.use(express.json());
app.use(express.static('views'));

// ------ SESSION & COOKIES & PASSPORT ------
let cookieConfig = {
  maxAge: 1000 * 60 * 60 * 24,
  domain: COOKIE_DOMIAN,
};
if (NODE_ENV === "production" || NODE_ENV === "development") {
  cookieConfig.secure = true;
  cookieConfig.sameSite = "none";
}
const store = new MongoDBStore({
  uri: MONGODB,
  collection: "sessions", // Collection to store sessions
});
store.on("error", (error) => {
  console.error("MongoDBStore Error:", error);
});
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: cookieConfig,
    store: store, // TODO: set and store it in redis
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// ------- USE ROUTES ------
app.use("/api/login", LoginRoute);
//app.use('/api/sublease', SubleaseRoute);

// ------START SERVER ------
const port = process.env.PORT;
console.log("Client Website is now:", CLIENT_URL);
app.listen(port, () => console.log(`Listening on port ${port}!`));

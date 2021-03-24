require('./db/db')
const port = process.env.PORT || 3000;
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const flash = require("connect-flash");
const bodyParser = require("body-parser");
const methodOverride = require('method-override')
const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session)

require("./db/db");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/userRoute");
const adminRoute = require('./routes/adminRoute');

const app = express();

const store = new MongoDBStore({
  uri: "mongodb+srv://gaurav:gaurav@cluster0.o9odr.mongodb.net/shoping",
  colloection: 'sessions',
});

// view engine setup
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: "mysupersecret",
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use("/user", userRouter);
app.use("/admin", adminRoute)
app.use("/", indexRouter);

app.listen(port, () => {
  console.log("server is up on the port ", port);
});

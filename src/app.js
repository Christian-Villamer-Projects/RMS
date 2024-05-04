require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const ejs = require('ejs');
const port = process.env.PORT || 5000;
const flash = require('connect-flash');
var session = require('express-session');
const cookieParser = require('cookie-parser');


app.use(session({
  secret: 'this is my secretkey',
  resave: false,
  cookie: { maxAge: 1000 * 60 },
  saveUninitialized: true,
//   store: store,
}));

app.use(flash());



app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "view"));

app.use(express.static(path.join(__dirname, "public")));


// ========== required router =========== //

const index_router = require("./routes/index");
const login_router = require("./routes/login");
const sign_up_router = require("./routes/sign_up");


app.use("/", index_router);
app.use("/login", login_router);
app.use("/sign_up", sign_up_router)

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
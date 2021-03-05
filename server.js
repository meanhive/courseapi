const express = require('express');
const assert = require('assert');
const cors = require('cors');
const session = require('express-session');
const cookies = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = Number(4000);
const config = require("./config");
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set("views", "./views");

app.use(cookies());

app.use(session({
    secret: "bepractical123",
    saveUninitialized: true,
    resave: true
}));

//db config settings
mongoose.Promise = global.Promise;
mongoose.connect(config.db_uri, {useNewUrlParser: true })
.then(res => {
    console.log("db connection is successful");
})
.catch(err => console.log(err));


app.use("/", require("./route"));

app.listen(PORT, () => {
    console.log(`server is up and running in http://localhost:${PORT}`);
})
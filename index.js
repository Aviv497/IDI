// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const session = require('express-session');
const passport = require("passport");
const LocalStrategy = require('passport-local')
const passportLocalMongoose = require("passport-local-mongoose");
const path = require('path');
const { connect } = require("http2");

const app = express();

const PORT = process.env.PORT || 3000


// app.use(express.static("public"));

app.use(express.static(__dirname + '/public'));
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://Aviv:aviv2206@idi.9i0ahxv.mongodb.net/idiDB");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
    // googleId: String,
    // secret: String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/three", function (req, res) {
    res.render("three");
});

app.get("/measure", function (req, res) {
    res.render("measure");
});

app.get("/signup", function (req, res) {
    res.render("signup");
});

app.get("/signin", function (req, res) {
    res.render("signin");
});

app.get("/user", async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("signin")
    } else res.render("user", { user: req.user });
});

app.get("/main", async (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.redirect("signin")
    } else {
        res.render("main", { user: req.user });
    }
});

app.get("/design", async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("signin")
    } else {
        res.render("design", { user: req.user });
    }
});

app.get("/budget", async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("signin")
    } else res.render("budget", { user: req.user });
});

app.get("/fullroom", async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("signin")
    } else res.render("fullroom", { user: req.user });
});

app.get("/few-items", async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("signin")
    } else res.render("few-items", { user: req.user });
});

app.get("/one-item", async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("signin")
    } else res.render("one-item", { user: req.user });
});

app.get("/style", async (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("signin")
    } else res.render("style", { user: req.user });
});


app.get("/secrets", function (req, res) {
    if (req.isAuthenticated()) {
        res.render("secrets");
    } else {
        res.redirect("/signup")
    }
});


app.post("/signup", async (req, res) => {

    console.log('Got body at sign up:', req.body);
    const { first_name, last_name, username, email, password } = req.body;
    const user = new User({ first_name, last_name, username, email });
    User.register(user, password, function (err, user) {
        if (err) {
            console.log(err);
            res.redirect("/signup");
        } else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/main");
            });
        }
    });

});

app.post("/signin", async (req, res) => {
    const user = await new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, function (err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/main");
            });
        }
    });

});

app.use((req, res, next) => {
    res.status(404).send('<h1>Sorry, the page you were looking for is not found</h1>')
});


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    })
})

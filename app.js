//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const session = require('express-session');
const passport = require("passport");
const LocalStrategy = require('passport-local')
const passportLocalMongoose = require("passport-local-mongoose");


const app = express();

// app.use(express.static("public"));

app.use(express.static(__dirname + '/public'));

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


mongoose.connect('mongodb://127.0.0.1:27017/idiDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo CONNECTION OPEN")
    })
    .catch(err => {
        console.log("OH NO Mongo connection ERORR!!!!!");
        console.log(err)
    })


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
// userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
// passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// app.get("/fakeuser", async (req, res) => {
//     const user = new User({ email: 'ab@ab.com', username: 'ab', first_name: 'ab,', last_name: 'ab' });
//     const neuser = await User.register(user, 'ab');
//     res.send(neuser);
// });

app.get("/", function (req, res) {
    res.render("home");
});


app.get("/signup", function (req, res) {
    res.render("signup");
});

app.get("/signin", function (req, res) {
    res.render("signin");
});

app.get("/user", async (req, res) => {
    // const user_name = await User.findById(req.params._id)
    // console.log('Find user:', user_name)
    if (!req.isAuthenticated()) {
        res.redirect("signin")
    } else res.render("user", { user: req.user });
});

app.get("/secrets", function (req, res) {
    if (req.isAuthenticated()) {
        res.render("secrets");
    } else {
        res.redirect("/signup")
    }
});

app.get("/main", function (req, res) {
    if (!req.isAuthenticated()) {
        res.redirect("signin")
    } else res.render("main", { user: req.user });
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
    console.log('Got body at sign in:', req.body);
    const user = await new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, function (err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function () {
                console.log('user =', req.user);
                res.redirect("/main");
            });
        }
    });

});



app.listen(3000, function () {
    console.log("Server started on port 3000.");
});
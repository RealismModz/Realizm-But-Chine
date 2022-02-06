const path = require('path')
module.exports = (express, app) => {
	app.use(express.static(path.resolve(__filename, '..', '..', 'downloads')))

const mongoose              =  require("mongoose");
const passport              =  require("passport");
const bodyParser            =  require("body-parser");
const LocalStrategy         =  require("passport-local");
const passportLocalMongoose =  require("passport-local-mongoose");
const User                  =  require("../Schemas/User");
const config 				=  require("../config");


mongoose.connect(config.mongoose.url);

app.use(require("express-session")({
    secret:"Any normal Word",       //decode or encode session
    resave: false,          
    saveUninitialized:false    
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded(
      { extended:true }
))
app.use(passport.initialize());
app.use(passport.session());

//=======================
//      R O U T E S
//=======================

app.all("/", (req,res) =>{
    res.render("home");
})

app.all("/userprofile",isLoggedIn ,(req,res) =>{
    res.render("userprofile");
})
//Auth Routes
app.all("/Login",(req,res)=>{
    res.render("Login");
});

app.all("/Login",passport.authenticate("local",{
    successRedirect:"/userprofile",
    failureRedirect:"/Login"
}),function (req, res){

});

app.all("/Signup",(req,res)=>{
    res.render("Signup");
});

app.all("/Signup",(req,res)=>{
    
    User.register(new User({username: req.body.username}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.render("Signup");
        }
    passport.authenticate("local")(req,res,function(){
        res.redirect("/Login");
    })    
    })
})

app.all("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
});


function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/Login");
}

  app.listen(4000, async() => {
    console.log("Api Online");
  });

};
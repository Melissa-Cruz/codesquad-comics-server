const express = require("express");
const router = express.Router();
const passport = require("passport");


const {
  register,
  login,
  logout,
  localLogin,
} = require("../controllers/authController");

router.post("/register", register);

router.get("/login", login); 

// router.post("/login", 
//   passport.authenticate("local",{
//     failureRedirect:"/login/error",
//     failureMessage:true
//   }),
//   login);

router.get("/login/google",
passport.authenticate("google", {scope:["profile", "email"]})
);
router.get("/google/callback",
  passport.authenticate("google",{
    failureRedirect:"/login",
    successRedirect:"dashboard",
  })
);

router.get("/login/error", (req, res, next) => {
  return res.json("Login error");
});

router.post("/login/local", localLogin);

router.post("/logout", logout);

router.get("/unauthenticated", (req, res, next) => {
  console.log("Returning to the homepage...");
  response.redirect("/");
});

module.exports = router;

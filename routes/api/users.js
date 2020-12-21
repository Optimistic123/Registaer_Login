const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const { validateLoginInput , validateRegisterInput} = require('../../validation/auth');

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
router.post("/register", (req, res) => {

  //accept form data -- destructuring form data from frontend
  const { name, email, password } = req.body;
  
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {

    var json_data = errors;
    var result = [];
    for(var i in json_data){
      result.push(json_data [i]);
    }
    // console.log(result);
    return res.status(400).json({
      error : result[0]
    });
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ error: "Email is taken" });
    } else {
      const newUser = new User({ name ,email,password});

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save((err, result) => {
            if (err) {
                return res.status(401).json({
                    error: 'Error in registration. Try later'
                });
            }
            // console.log('this is final step in user registeration --> newUser will be saved to db',newUser)
            return res.json({
                message: `Hello ${name} you have completed registration process. Please login.`
            });
        });
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {

  //accept form data -- destructuring form data from frontend
  const { email, password } = req.body;

  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {

    var json_data = errors;
    var result = [];
    for(var i in json_data){
      result.push(json_data [i]);
    }
    // console.log(result);
    return res.status(400).json({
      error : result[0]
    });
  }

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: "User with this email is not registered" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {id: user.id,name: user.name};

        // Sign token
        jwt.sign(payload, keys.secretOrKey, {expiresIn: 31556926 },(err, token) => {
            res.json({message:"Logged in" , success: true,token: "Bearer " + token});
          }
        );
      } else {
        return res.json({
          error:`Sorry ${user.name} Login error ,Please try again !`
        });
      }
    });
  });
});

module.exports = router;
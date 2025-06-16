const passport = require("passport");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");
// const { rawListeners } = require("../models/bookModel");
const login = async (req, res, next) => {
  res.status(200).json({
    success: { message: "User logged in." },
    statusCode: 200,
  });
};

const register = async (req, res, next) => {
  console.log("register function is running");

  const { firstName, lastName, username, password, googleId, githubId } = req.body;
  console.log(req.body);

  console.log("here i am");
  if(!firstName||!username||!password){
    return res.status(400).json({
      error:{message:"Missing required fields."},
      statusCode:400,
    });
  };

  try {
    console.log("in the try block before hashing the password");
    const hashedPassword = await bcrypt.hash(password,10);
    // Stage a newUser object to log when a user registers for the first time
    const newUser = new User( {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: hashedPassword,
      googleId:googleId,
      githubId:githubId
    });
    // Send a simple log to confirm that code is operational. Copied from the slides but I do not understand.
    console.log("Registration is successful");

    await newUser.save();


    req.login(newUser, (error) =>{
      if(error){
        return next(error);
      }
      newUser.password = undefined; 

    return res.status(201).json({
      success: { message: "New user is created" },
      data: { newUser },
      statusCode: 201,
    });

    })
 

  } catch (error) {
    return next(error);
    ;
  }
};



const logout = async (req, res, next) => {
  req.logout((err)=>{
    if (err) {
    return next(err);
    }

    req.session.destroy((err)=>{
      if(err){
        return next(err);
      }
    })
    console.log("Session destroyed");

    res.clearCookie("connect.sid");
    return res.status(200).json({
      success:{ message:"User logged out"},
      statusCode:200,
    });
  })

};

const localLogin = async (req, res, next) => {
  let result = true;

  passport.authenticate("local", (err, user,info)=>{
       //error handling as a final check and a failsafe
    if (err) {
      return next(err);
    }

    if(!user){
      return res.status.json(401)({
        error:{message: info.message}
      });
    }
    req.login(user, (err)=>{
      if(err){
        return next(err)
      }
      const userCopy = {...req.user._doc};
      userCopy.password = undefined;

      console.log(userCopy);


      res.status(200).json({
        success:{message:"Login successful within local authentication feature."}, 
        data: {userCopy}, 
        result:result,
        statusCode:200,
      })
    });

})

};

module.exports = {register, login, logout, localLogin};

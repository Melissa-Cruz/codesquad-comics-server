const express = require("express");

const register = async (req, res, next) =>{
    const {firstName, lastName, username, password} = req. body

    console.log(register);
    try{
        // Stage a newUser object to log when a user registers for the first time 
        const newUser = {
            firstName: firstName, 
            lastName: lastName, 
            username: username, 
            password: password,
        }; 
        // Send a simple log to confirm that code is operational. Copied from the slides but I do not understand.

        console.log("Registration is sucessfull outisde of local authentication feature.");
        // left some stuff out from slides based on directions 

        return res.status(201).json({
            success: {message: "New user is created"},
            data: { newUser }, 
            statusCode: 201, 
        });
    }catch(error){
        return res.status(500).json({
            error: {message: "Internal server error!"}, 
            statusCode:500,
        });
    }
};


const login = async (req, res, next) =>{
    res.status(200).json({
        success: {message: "User logged in."}, 
        statusCode: 500,
    })

}; 

const logout = async(req, res, next) => {
    console.log("Initializing logout controller logic..."); 
    //destroy the session on logout so unauthorized calls will be blocked

    console.log("Session destroyed");
    res.clearCookies("connect.sid");

    res.status(200).json({
        success: {message: "User logging out"}, 
        statusCode:200,
    })

    function sessionDestruction(err){
        //error handling as a final check and a failsafe
        if (err){
            return next(err);
        }
    }
    sessionDestruction();
    console.log("Logout function activated. Logging out...")


};


const localLogin = async (req, res, next)=>{
    let result = true;

    function mockPassport(err, user){
        //error handling as a final check and a failsafe
        if (err){
            return next(err);
        }
    }
    //call the mockPassport feature 
    mockPassport();

    res.status(200).json({
        success: {message: "Login successful."},
        data:{result:result}, 
        statusCode:200
    })
}; 

module.exports()
// Move the routes related to the books in the app.js file to bookRoutes.js

const express = require("express");
const router = express.Router();



// Cut all of the routes that begin with /api/books from the app.js and move them to the bookRoutes.js file.
// PATH: /api/books, HANDLER: "This will send all of the book data"
router.get(("/"), (request, response,next) =>{
    // response.send("This will send all of the book data")
    response.status(200).json({
        success:{message:"This will send all of the book data"}, 
        statusCode:200,
    })

});

// PATH: /api/books/:id, HANDLER:  "This will send a single book by its id"
router.get(("/:id"), (request, response, next) =>{
    // response.send("This will send a single book by its id")
    response.status(200).json({
        success:{message:"This will send a single book by its id"}, 
        statusCode:200,
    });
});

// PATH: /api/books/create/new, HANDLER: "This will create a new book"
// it works if it's  router.get
router.post(("/create/new"), (request, response, next) => {
    // response.send("This will create a new book")
    response.status(200).json({
        success:{message:"This will create a new book"},
        statusCode:200,
    });
});

// PATH: /api/books/update/:id, HANDLER: "This will update a book by its id"
// it works if its router.get
router.put(("/edit/:id"), (request, response, next) =>{
    // response.send("This will update a book by its id")
    response.status(200).json({
        success:{message:"This will update a book by its id"}, 
        statusCode:200,
    });
});

// PATH: /api/books/delete/:id, HANDLER: "This will delete a book by its id" 
//it works if its router.delete
router.delete(("/delete/:id"), (request, response, next) => {
    // response.send("This will delete a book by its id")
    response.status(200).json({
        success:{message:"This will delete a book by its id"},
        statusCode:200,
    });
});



module.exports = router;
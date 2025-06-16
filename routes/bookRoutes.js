// Move the routes related to the books in the app.js file to bookRoutes.js

const express = require("express");
const router = express.Router();

const { getAllBooks, getBook, createBook, updateBook, deleteBook } = require("../controllers/bookController")

// Cut all of the routes that begin with /api/books from the app.js and move them to the bookRoutes.js file.
// PATH: /api/books, HANDLER: "This will send all of the book data"
router.get(("/"), getAllBooks);

// PATH: /api/books/:id, HANDLER:  "This will send a single book by its id"
router.get(("/:_id"), getBook);

// PATH: /api/books/create/new, HANDLER: "This will create a new book"
// it works if it's  router.get
router.post(("/create/new"), createBook );

// PATH: /api/books/update/:id, HANDLER: "This will update a book by its id"
// it works if its router.get
router.put(("/edit/:_id"),updateBook );

// PATH: /api/books/delete/:id, HANDLER: "This will delete a book by its id" 
//it works if its router.delete
router.delete(("/delete/:_id"), deleteBook);



module.exports = router;
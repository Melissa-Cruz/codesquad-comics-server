const express = require("express");
const booksData = require("../data/books");

const getAllBooks = (req, res, next) => {
  // response.send("This will send all of the book data")

  try {
    //the homework says to put it inside the try
    const books = booksData;
    return res.status(200).json({
      success: { message: "This will send all of the book data" },
      data: { books: books },
      statusCode: 200,
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Resource not found. Search  again. " },
      statusCode: 400,
    });
  }
};

const getBook = (req, res, next) => {
  const { _id } = req.params;

  try {
    const book = booksData.find((book) => book._id === _id);

    return res.status(200).json({
      success: { message: "This will send a single book by its id" },
      data: {book:book},
      statusCode: 200,
    });
  } catch (error) {
    return res.status(400).json({
        success: { message: "Resource not found. Search again" },
        statusCode: 400,
      });
  }
};

const createBook = (request, response, next) => {
  // response.send("This will create a new book")
  response.status(200).json({
    success: { message: "This will create a new book" },
    statusCode: 200,
  });
};

const updateBook = (request, response, next) => {
  // response.send("This will update a book by its id")
  response.status(200).json({
    success: { message: "This will update a book by its id" },
    statusCode: 200,
  });
};

const deleteBook = (request, response, next) => {
  // response.send("This will delete a book by its id")
  response.status(200).json({
    success: { message: "This will delete a book by its id" },
    statusCode: 200,
  });
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };

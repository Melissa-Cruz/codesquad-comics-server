const express = require("express");
const books = require("../data/books");


const getAllBooks = (request, response,next) =>{
    // response.send("This will send all of the book data")
    response.status(200).json({
        success:{message:"This will send all of the book data"}, 
        statusCode:200,
    })};

const getBook =  (request, response, next) =>{
    // response.send("This will send a single book by its id")
    response.status(200).json({
        success:{message:"This will send a single book by its id"}, 
        statusCode:200,
    });
};

const createBook = (request, response, next) => {
    // response.send("This will create a new book")
    response.status(200).json({
        success:{message:"This will create a new book"},
        statusCode:200,
    });
};

const updateBook = (request, response, next) =>{
    // response.send("This will update a book by its id")
    response.status(200).json({
        success:{message:"This will update a book by its id"}, 
        statusCode:200,
    });
};

const deleteBook =  (request, response, next) => {
    // response.send("This will delete a book by its id")
    response.status(200).json({
        success:{message:"This will delete a book by its id"},
        statusCode:200,
    });
};

module.exports =  { getAllBooks, getBook, createBook, updateBook, deleteBook } ;
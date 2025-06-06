const Book = require("../models/bookModel");


// static js file version -> const booksData = require("../data/books");
// idk why I'm putting async but it's in slide and demo
const getAllBooks = async (req, res, next) => {
  // response.send("This will send all of the book data")

  try {
    //the homework says to put it inside the try
    const books = await Book.find({});

    return res.status(200).json({
      success: { message: "This will send all of the book data" },
      data: { books: books },
      statusCode: 200,
    });
  } catch (error) {
    return next(error)
    // return res.status(400).json({
    //   error: { message: "Resource not found. Search  again. " },
    //   statusCode: 400,
    // });
  };
};

const getBook = async (req, res, next) => {
  const { _id } = req.params;

  try {
    // const book = Book.find((book) => book._id === _id);

    // Perform ID Check: if there is not an Id found, we will use the throw command with a new Error constructor object, and a string that states: "Id is required"

    if(!_id){
      throw new Error("ID is required");
    }

    // Refactor the iterator that stores the foundBook, ex. (one) book after finding the matching _id value to use the findById method on the book Model, with the _id as the parameter

    const book = Book.findById(_id);
    // Book Check: if there is not an book found, we will use the throw command with a new Error constructor object, and a string that states: "Book not found"

    if(!book){
      throw new Error("Book not found");
    }


    return res.status(200).json({
      success: { message: "Book found" },
      data: { book },
      statusCode: 200,
    });
  } catch (error) {
    return next(error)
    // return res.status(400).json({
    //   error: { message: "Resource not found. Search again" },
    //   statusCode: 400,
    // });
  }
};

const createBook = async (req, res, next) => {
  const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } =
    req.body;


  try {


      // Required Value Check from Model: if the required information (title, author, pages) are not present, we need to handle errors early before we proceed within our try statement.
    if(!title || !author || !price || !starRating){
      throw new Error("Missing required fields, please review.");
    }

    const newBook = new Book({
      title,
      author,
      publisher,
      genre,
      pages,
      rating,
      synopsis,
      imageUrl,
    });

    // Make sure that the newBook.save method is in the try statement after the initialization of the newBook.
    await newBook.save()

    return res.status(201).json({
      success: { message: "A new  book is created." },
      data: { newBook },
      statusCode: 201,
    });
  } catch (error) {
    return next(error)
    // return res.status(400).json({
    //   error: { message: "Error failed to create a new book." },
    //   statusCode: 400,
    // });
  };
};

const updateBook = async (req, res, next) => {
    const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } =
    req.body;

    const { _id } = req.params;


    try{

      // Required Value Check from Model: if the required information (title, author, pages) are not present, we need to handle errors early before we proceed within our try statement.
      if(!title || !author ||!pages){
        throw new Error("Missing required fields, please review.");
        }

        // Make changes to upgrade the updatedBook object to await for the Book model to be found via the findByIdAndUpdate method, with three parameters, _id, an object using the $set method on the form parameters and {new: true}

        const updatedBook = await Book.findByIdAndUpdate(_id, 
         { $set: { title, 
            author, 
            publisher,
            genre, 
            pages, 
            rating, 
            synopsis, 
            imageUrl,
        }
      },
      {new:true}
      );

      //Update Book Check: if for some reason, the book was not updated (or can't be found), use the throw command with the new keyword on an Error constructor and write a message that says "Book not found".
      if(!updateBook){
        throw new Error("Book not found");
      }

    return res.status(201).json({
            success:{message:"The book was updated"}, 
            data:{book:updatedBook},

        });
    }catch(error){

        // return res.status(400).json({
        //     error:{message:"There was an error updating the book."},
        //     statusCode: 400
        // });
        return next(error)

    };

};

const deleteBook = async (req, res, next) => {

    const { _id } = req.params;

    try{
      // ID Check: if there is not an Id found, we will use the throw command with a new Error constructor object, and a string that states: "Id is required"

      if(!_id){
        throw new Error("ID is required");
      }

      // Refactor the iterator that stores the foundBook, ex. (one) book after finding the matching _id value to use the findByIdAndDelete method on the book Model, with the _id as the parameter
      await Book.findByIdAndDelete(_id);


        // const books = Book.filter((book) = book._id !== _id);
        
      return res.status(200).json({
          success:{message:"Book deleted"},
          statusCode: 200,
      });

    }catch(error){
        return next(error)

    }
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };

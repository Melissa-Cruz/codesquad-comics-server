const booksData = require("../data/books");
// idk why I'm putting async but it's in slide and demo
const getAllBooks = async (req, res, next) => {
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

const getBook = async (req, res, next) => {
  const { _id } = req.params;

  try {
    const book = booksData.find((book) => book._id === _id);



    return res.status(200).json({
      success: { message: "This will get a single book by its id" },
      data: { book: book },
      statusCode: 200,
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Resource not found. Search again" },
      statusCode: 400,
    });
  }
};

const createBook = async (req, res, next) => {
  const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } =
    req.body;

  try {
    const newBook = {
      title,
      author,
      publisher,
      genre,
      pages,
      rating,
      synopsis,
      imageUrl,
    };

    return res.status(201).json({
      success: { message: "This will create a new book" },
      data: { book: newBook },
      statusCode: 201,
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Error failed to create a new book." },
      statusCode: 400,
    });
  }
};

const updateBook = async (req, res, next) => {
    const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } =
    req.body;

    const { _id } = req.params;

    try{
        const updatedBook = { title, 
            author, 
            publisher,
            genre, 
            pages, 
            rating, 
            synopsis, 
            imageUrl,
        };
        return res.status(201).json({
            success:{message:"The book was updated"}, 
            data:{book:updatedBook},

        });
    }catch(error){
        return res.status(400).json({
            error:{message:"There was an error updating the book."},
            statusCode: 400
        });

    }

};

const deleteBook = async (req, res, next) => {

    const { _id } = req.params;

    try{
        const books = booksData.filter((book) = book._id !== _id);
        
        return res.status(200).json({
            success:{message:"This will delete a book by it's id."},
            data:{book: books},
            statusCode: 200,
        });

    }catch(error){
        return res.status(400).json({
            error:{message:"There was an error while deleting the book."}, 
            statusCode:400,
        });

    }
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };

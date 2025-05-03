// --------------------------INITIALIZE EXPRESS -----------------------------
//require dependencies and set up express environment
const express = require("express");
const app = express();
const  PORT = 8080;


// --------------------------------MIDDLEWARE ------------------------------------

//require dependencies
const morgan = require("morgan"); 
const helmet = require("helmet");
const cors = require("cors");

//require path after the dependencies
const path = require("node:path");

// use the pacakages 
app.use(cors()); 
app.use(morgan("combined"));
app.use(helmet());

// Tell the app to use express to bundle all of the files within the  public directory
app.use(express.static(path.join(__dirname + "/public")));

// Tell the app to use express and JSON to read data
app.use(express.json());

//Tell the app to use express and urlencoded to
app.use(express.urlencoded({ extended: true}));


///-------------------------------SET UP GET ROUTES-------------------------
// Create six basic GET routes with the following information using the .send() method and the request/response/next parameter:

// PATH: /, HANDLER: "This route points to the Home page
app.get(("/"), (request, response, next) =>{
    // response.send("This route points to the Home page");
    response.status(200).json({
        success:{message:"This route points to the Home page" },
        statusCode: 200,
    });
});

// PATH: /api/books, HANDLER: "This will send all of the book data"
app.get(("/api/books"), (request, response,next) =>{
    // response.send("This will send all of the book data")
    response.status(200).json({
        success:{message:"This will send all of the book data"}, 
        statusCode:200,
    })

});

// PATH: /api/books/:id, HANDLER:  "This will send a single book by its id"
app.get(("/api/books/:id"), (request, response, next) =>{
    // response.send("This will send a single book by its id")
    response.status(200).json({
        success:{message:"This will send a single book by its id"}, 
        statusCode:200,
    });
});

// PATH: /api/books/create/new, HANDLER: "This will create a new book"
app.get(("/api/books/create/new"), (request, response, next) => {
    // response.send("This will create a new book")
    response.status(200).json({
        success:{message:"This will create a new book"},
        statusCode:200,
    });
});

// PATH: /api/books/update/:id, HANDLER: "This will update a book by its id"
app.get(("/api/books/update/:id"), (request, response, next) =>{
    // response.send("This will update a book by its id")
    response.status(200).json({
        success:{message:"This will update a book by its id"}, 
        statusCode:200,
    });
});

// PATH: /api/books/delete/:id, HANDLER: "This will delete a book by its id" 
app.get(("/api/books/delete/:id"), (request, response, next) => {
    // response.send("This will delete a book by its id")
    response.status(200).json({
        success:{message:"This will delete a book by its id"},
        statusCode:200,
    });
});



//-----------------------------CONNECT THE APP TO THE PORT----------------------
// use app.listen() to start the server and send a console.log to the terminal with a start message that says `The server is listening on port ${PORT}`

app.listen(PORT, () =>{
    console.log(`The server is listening on port ${PORT}`)
    console.log(
        `Server is listening on http://localhost:${PORT}. Connection established.`
    )
})
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const pool = require("./db");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})

// GET /books -> return all the books
app.get("/books", async(req, res) => {
    try {
        const books = await pool.query("SELECT * FROM book");
        res.status(200).json({message: `Books is returned`, data: books.rows})
    } catch (error) {
        res.json({error: error.message})
    }
})

// GET /books/:id -> return return a specific book
app.get("/books/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const book = await pool.query("SELECT * FROM book WHERE id=$1", [id]);
        // res.status(200).json({message: `Specific book is returned with id: ${id}` })
        res.status(200).json({message: `Specific book is returned`, data: book.rows })
    } catch (error) {
        res.json({error: error.message})
    }
})

// POST /books -> create book
app.post("/books", async(req, res) => {
    try {
        const {name, description} = req.body;
        const id = uuidv4();
        // inserting book data into database 
        const newBook = await pool.query("INSERT INTO book (id, name, description) VALUES ($1, $2, $3) RETURNING *", [id, name, description]);

        res.status(201).json({message: `Book was created `, data: newBook.rows});
    } catch (error) {
        res.json({error: error.message})
    }
})

// DELETE /books/:id -> delete a book
app.delete("/books/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteBook = await pool.query("DELETE FROM book WHERE id=$1", [id]);
        // res.status(200).json({message: `Specific book is deleted with id: ${id}` })
        res.status(200).json({message: `Book was deleted`, data: deleteBook.rows })
    } catch (error) {
        res.json({error: error.message})
    }
})

// PUT /books/:id -> update a book
app.put("/books/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {name, description} = req.body;
        res.status(200).json({message: `Book was updated. ${name}, ${description}`})
    } catch (error) {
        res.json({error: error.message})
    }
})

// CRUD -> Create, Read, Update, Delete
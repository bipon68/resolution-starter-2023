const express = require("express");
const app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})

// GET /books -> return all the books
app.get("/books", async(req, res) => {
    try {
        res.status(200).json({message: "Books are returned"})
    } catch (error) {
        res.json({error: error.message})
    }
})

// GET /books/:id -> return return a specific book
app.get("/books/:id", async(req, res) => {
    try {
        const {id} = req.params;
        res.status(200).json({message: `Specific book is returned with id: ${id}` })
    } catch (error) {
        res.json({error: error.message})
    }
})
// POST /books -> create book
// DELETE /books/:id -> delete a book
// PUT /books/:id -> update a book
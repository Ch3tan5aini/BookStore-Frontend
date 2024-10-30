import express from "express";
import Book from "../models/bookModel.js";

const router = express.Router();

// Post Route to Add new Book
router.post("/", async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            res.status(400).send({ message: "Please Send All The Required Fields: Title, Author, Publish Year" });
        }
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(200).send(newBook);

    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).send("Error! Please Try Again");
    }
});

// get route to get all the Books
router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).send({
            count: books.length,
            data: books
        })

    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).send("Error! Please Try Again");
    }
});

// get route to get specific book
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            res.status(404).send({ success: false, message: "Invalid Id, Please Try Again!" })
        }
        res.status(200).send({ success: true, book });
    } catch (error) {
        console.error('Error occurred:', error.message);
        res.status(500).send("Error! Please Try Again");
    }
});

//Patch route to update a Book
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;
        const result = await Book.findByIdAndUpdate(id, update);
        if (!result) {
            res.status(404).send({ success: false, message: "Invalid Id, Please Try Again!" })
        }
        res.status(200).send({ success: true, message: "Book Updated" });
    } catch (error) {
        console.error('Error occurred:', error.message);
        res.status(500).send({ success: false, message: "Try Again Later" });
    }
});

//Delete Route to Delete a Book
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            res.status(404).send({ success: false, message: "Invalid Id, Please Try Again!" })
        }
      res.status(200).send({ success: true, message: "Book Deleted" });
    } catch (error) {
      console.error('Error occurred:', error.message);
      res.status(500).send({ success: false, message: "Try Again Later"});
    }
  });

  export default router;
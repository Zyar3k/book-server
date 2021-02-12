const express = require("express");
const router = express.Router();

const BookController = require("../controllers/book.controller");

router.route("/books").get(BookController.getAllBooks);

router.route("/book/:id").get(BookController.getBook);

module.exports = router;

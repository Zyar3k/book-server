const express = require("express");
const router = express.Router();

const BookController = require("../controllers/book.controller");

router.route("/books").get(BookController.getAllBooks);

module.exports = router;

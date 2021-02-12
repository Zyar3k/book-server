const Book = require("../models/book.model");

// exports.getAllBooks = function (req, res) {
//   res.json(console.log("=> api books"));
// };

exports.getAllBooks = async (req, res) => {
  try {
    res.status(200).json(await Book.find());
  } catch (error) {
    res.status(500).json(error);
  }
};

const Book = require("../models/book.model");

//  get all books
exports.getAllBooks = async (req, res) => {
  try {
    res.status(200).json(await Book.find());
  } catch (error) {
    res.status(500).json(error);
  }
};
// get specific book
exports.getBook = async (req, res) => {
  try {
    res.status(200).json(await Book.find({ _id: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
};
// add new book
exports.addBook = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    page: req.body.page,
    // key: req.body.key,
    // link: req.body.link,
    // readed: req.body.readed,
    // available: req.body.available,
    // ama: req.body.ama,
    // bbc: req.body.bbc,
    // emp: req.body.emp,
    // gan: req.body.gan,
    // pozy: req.body.pozy,
  });
  try {
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (error) {
    res.json({ message: error });
  }
};

// delete book
exports.deleteBook = async (req, res) => {
  try {
    const deleteBook = await Book.remove({ _id: req.params.id });
    res.json(deleteBook);
  } catch (error) {
    res.json({ message: error });
  }
};

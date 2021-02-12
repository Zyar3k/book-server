const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
  author: { type: Object, required: true },
  title: { type: String, required: true },
  key: { type: String, required: true },
  link: { type: String, required: true },
  page: { type: Number, required: true },
  readed: { type: Boolean, required: true },
  available: { type: Boolean, required: true },
  ama: { type: Boolean, required: true },
  bbc: { type: Boolean, required: true },
  emp: { type: Boolean, required: true },
  gan: { type: Boolean, required: true },
  pozy: { type: Boolean, required: true },
});

module.exports = mongoose.model("Book", Book);

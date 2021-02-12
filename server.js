const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/books", (req, res) => {
  res.json(console.log("=> api books"));
});

app.listen(8000, function () {
  console.log(`Server is running on port: `, 8000);
  console.log(`Happy coding`);
});
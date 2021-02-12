const express = require("express");
const cors = require("cors");
const config = require("./config");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/books", (req, res) => {
  res.json(console.log("=> api books"));
});

app.listen(config.PORT, function () {
  console.log(`Server is running on port: `, config.PORT);
  console.log(`Happy coding`);
});

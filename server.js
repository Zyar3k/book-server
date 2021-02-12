const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

const bookRoutes = require("./routes/book.routes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", bookRoutes);

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;

db.once("open", () => console.log("Wow!! You're connected to the database!"));
db.on("error", (error) => console.log("Error " + error));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log(`Happy coding`);
});

mongoose.set("useFindAndModify", false);

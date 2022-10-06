const express = require("express");
const app = express();

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

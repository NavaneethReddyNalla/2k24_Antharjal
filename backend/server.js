const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4000;

app.get("", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => console.log(`Server live on http://localhost:${port}/`));

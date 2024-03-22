const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4000;

app.use(express.json());

app.listen(port, () => console.log(`Server live on http://localhost:${port}/`));

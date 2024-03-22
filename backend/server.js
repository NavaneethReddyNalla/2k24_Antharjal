const express = require("express");
const app = express();
const mongoClient = require("mongodb").MongoClient;
const userRouter = require("./routes/user");
require("dotenv").config();

mongoClient
  .connect(process.env.DB_URL)
  .then((client) => {
    const dbObj = client.db(process.env.DB_NAME);

    const campaignCollection = dbObj.collection("campaignsCollection");
    const userCollection = dbObj.collection("usersCollection");

    app.set("userCollection", userCollection);
    app.set("campaignCollection", campaignCollection);

    console.log("Established Connection with the Database.");
  })
  .catch((error) => console.log(error));

const port = process.env.PORT || 4040;

app.use(express.json());
app.use("/user", userRouter);

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(port, () => console.log(`Server live on http://localhost:${port}/`));

const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");
const userRouter = express.Router();

let userCollection, campaignCollection;

userRouter.use((req, res, next) => {
  userCollection = req.app.get("userCollection");
  campaignCollection = req.app.get("campaignCollection");
  next();
});

userRouter.post(
  "/new-user",
  expressAsyncHandler(async (req, res) => {
    userCollection = req.app.get("userCollection");

    const user = req.body;
    const dbUser = await userCollection.findOne({ username: user.username });

    if (dbUser !== null) {
      return res.send({ message: "User Already Exists", statusCode: 1 });
    }

    const hashedPassword = await bcryptjs.hash(user.password, 7);
    user.password = hashedPassword;

    await userCollection.insertOne(user);
    res.send({ message: "User Created", statusCode: 2 });
  })
);

module.exports = userRouter;

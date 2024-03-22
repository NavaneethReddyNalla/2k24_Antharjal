const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const campaignRouter = express.Router();

let campaignCollection;

campaignRouter.use((req, res, next) => {
  campaignCollection = req.app.get("campaignCollection");
  next();
});

campaignRouter.post(
  "/new-campaign",
  expressAsyncHandler(async (req, res) => {
    const campaign = req.body;
  })
);

module.exports = campaignRouter;

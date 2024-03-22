const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const campaignRouter = express.Router();

let campaignCollection;

campaignRouter.use((req, res, next) => {
  campaignCollection = req.app.get("campaignCollection");
  next();
});

campaignRouter.get(
  "/campaigns",
  expressAsyncHandler(async (req, res) => {
    const campaigns = await campaignCollection.find({
      verified: true,
      completed: false,
    });

    res.send({
      message: "All Active Campaigns",
      statusCode: 9,
      payload: campaigns,
    });
  })
);

campaignRouter.post(
  "/new-campaign",
  expressAsyncHandler(async (req, res) => {
    const campaign = req.body;
  })
);

module.exports = campaignRouter;

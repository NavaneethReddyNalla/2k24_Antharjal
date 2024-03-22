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
    res.send(campaign);
  })
);
campaignRouter.get(
  "/campaign",
  expressAsyncHandler( (req,res)=>
  {
    res.send("hello");
  })
)

module.exports = campaignRouter;

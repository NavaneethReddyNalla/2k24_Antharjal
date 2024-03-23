const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const adminRouter = express.Router();

let campaignCollection;

adminRouter.use((req, res, next) => {
  campaignCollection = req.app.get("campaignCollection");
  next();
});

// Displaying all unverified Campaigns
adminRouter.get(
  "/to-verify",
  expressAsyncHandler(async (req, res) => {
    const campaigns = await campaignCollection
      .find({ verified: false })
      .toArray();
    res.send({
      message: "All unverified campaigns",
      statusCode: 12,
      payload: campaigns,
    });
  })
);

// Verifying a single Campaign
adminRouter.put(
  "/verify/:id",
  expressAsyncHandler(async (req, res) => {
    await campaignCollection.updateOne(
      { id: +req.params.id },
      { $set: { verified: true } }
    );
    res.send({
      message: `Campaign ${req.params.id} is verified.`,
      statusCode: 11,
    });
  })
);

module.exports = adminRouter;

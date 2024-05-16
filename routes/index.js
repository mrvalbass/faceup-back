const { log } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

router.post("/upload", async (req, res) => {
  console.log(req.files);
  const resultMove = await req.files.photo.mv(
    `https://faceup-back-gamma.vercel.app/tmp/${req.files.photo.name}`
  );
  // const resultCloudinary = await cloudinary.uploader.upload(
  //   `./tmp/${req.files.photo.name}`
  // );
  // fs.unlinkSync(`./tmp/${req.files.photo.name}`);

  res.json({ result: true, resultMove });
});

module.exports = router;

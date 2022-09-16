const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("cool", { name: "Axel" });
});

module.exports = router;

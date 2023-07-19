const express = require("express");
const router = express.Router();

const {getOneProducts, getMultiProducts} = require("../controllers/ContProduct");

router.route("/").get(getOneProducts);
router.route("/testing").get(getMultiProducts);

module.exports = router; 
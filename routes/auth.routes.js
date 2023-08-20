const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", authController.register);
router.get("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;

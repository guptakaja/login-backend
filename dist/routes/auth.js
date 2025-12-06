"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const loginController_1 = require("../controllers/loginController");
const router = (0, express_1.Router)();
router.post("/register", authController_1.register);
router.post("/login", loginController_1.login); // ← added
exports.default = router;

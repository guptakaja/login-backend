"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors")); // ✅ Import cors
const db_1 = require("./config/db");
const auth_1 = __importDefault(require("./routes/auth"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// ✅ Enable CORS for all routes
app.use((0, cors_1.default)());
// Parse JSON requests
app.use(express_1.default.json());
// Routes
app.use("/auth", auth_1.default);
// Connect to DB and start server
db_1.sequelize.sync().then(() => {
    console.log("DB connected");
    app.listen(process.env.PORT, () => {
        console.log("Server running on port", process.env.PORT);
    });
});

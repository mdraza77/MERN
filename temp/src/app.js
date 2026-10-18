const express = require("express");
const authRouter = require("./routes/auth.route");
const groupRouter = require("./routes/group.route");
const expenseRouter = require("./routes/expense.route");
const balanceRouter = require("./routes/balance.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use("/api/auth", authRouter);
app.use("/api/groups", groupRouter);
app.use("/api/expense", expenseRouter);
app.use("/api/balance", balanceRouter);

module.exports = app;

const express = require("express");

const globalErrorHandler = require("./controllers/errorCotroller");

const app = express();

app.use(express.json({ limit: "10kb" }));

const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const clubServiceRouter = require("./routes/clubServiceRoutes");

app.use(userRouter);
app.use(blogRouter);
app.use(clubServiceRouter)

app.use(globalErrorHandler);

module.exports = app;
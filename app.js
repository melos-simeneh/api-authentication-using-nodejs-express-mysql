const express = require("express");
const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use("/api", authRouter);
app.use("/api/users", userRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const authRouter = require("./routes/auth.routes");

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use("/api", authRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

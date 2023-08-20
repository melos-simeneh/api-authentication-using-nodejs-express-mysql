const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRouter);

app.use((req, res) => {
  res
    .status(404)
    .json({ staus: "fail", message: `API URL ${req.url} not found` });
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

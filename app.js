const express = require("express");

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.get("/api/login", (req, res) => {
  res.json({ status: "success", message: "Working" });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

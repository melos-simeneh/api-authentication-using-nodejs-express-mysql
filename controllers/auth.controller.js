const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username=?";
  db.query(sql, [username], (err, data) => {
    if (err) return res.status(500).json({ status: "error", error: err });
    if (data.length)
      return res
        .status(409)
        .json({ status: "fail", message: "Username already exists" });

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const sql = "INSERT INTO users (username,password) VALUES (?)";
    const values = [username, hashedPassword];
    db.query(sql, [values], (err, result) => {
      if (err) return res.status(500).json({ status: "error", error: err });
      res
        .status(201)
        .json({ status: "success", message: "User created successfully" });
    });
  });
};

exports.login = (req, res) => {
  const username = req.body.username;
  const sql = "SELECT * FROM users WHERE username=?";
  db.query(sql, [username], (err, user) => {
    if (err) return res.status(500).json({ status: "error", error: err });

    if (!user.length)
      return res
        .status(404)
        .json({ status: "fail", message: "Invalid username or password" });

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      user[0].password
    );
    if (!checkPassword)
      return res
        .status(404)
        .json({ status: "fail", message: "Invalid username or password" });

    const token = jwt.sign({ id: user[0].id }, "secretkey");
    const { password, ...other } = user[0];
    res
      .cookie("accessToken", token, { httOnly: true })
      .status(200)
      .json({ status: "success", data: { user: other } });
  });
};

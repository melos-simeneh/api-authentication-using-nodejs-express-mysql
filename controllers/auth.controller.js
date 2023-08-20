const db = require("../config/db");

exports.login = async (req, res) => {
  try {
    res.json({ status: "success", data: {} });
  } catch (error) {}
};

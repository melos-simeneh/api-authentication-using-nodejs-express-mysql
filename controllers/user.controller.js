const db = require("../config/db");

exports.createUser = async (req, res) => {
  try {
    res.json({ status: "success", data: {} });
  } catch (error) {}
};

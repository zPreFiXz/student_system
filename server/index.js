const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "se_db",
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to our API!" });
});

// อ่านข้อมูล Profile ทั้งหมด
app.get("/api/profiles", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

// อ่านข้อมูล Profile ตาม ID
app.get("/api/profiles/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM profiles WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(404).json({ error: "Profile not found" });
    res.json(results[0]);
  });
});

// สร้าง Profile ใหม่
app.post("/api/profiles", (req, res) => {
  const { name, email, age } = req.body;
  const sql = "INSERT INTO profiles (name, email, age) VALUES (?, ?, ?)";
  db.query(sql, [name, email, age], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, name, email, age });
  });
});

// อัปเดตข้อมูล Profile
app.put("/api/profiles/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const sql = "UPDATE profiles SET name = ?, email = ?, age = ? WHERE id = ?";
  db.query(sql, [name, email, age, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Profile not found" });
    res.json({ message: "Profile updated successfully" });
  });
});

// ลบข้อมูล Profile
app.delete("/api/profiles/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM profiles WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Profile not found" });
    res.json({ message: "Profile deleted successfully" });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

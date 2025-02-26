const express = require("express");
const router = express.Router();
const { db } = require("../configs/db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

// อ่านข้อมูล Profile ของ User ที่ Login
router.get("/profile", (req, res) => {
  const user_id = req.user_id;

  const sql = "SELECT * FROM users WHERE user_id = ?";
  db.query(sql, [user_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else if (results.length === 0) {
      return res.status(404).json({ error: "Profile not found" });
    } else {
      res.json(results[0]);
    }
  });
});

// อ่านข้อมูล Profile ทั้งหมด
router.get("/profiles", (req, res) => {
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
router.get("/profiles/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM users WHERE user_id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(404).json({ error: "Profile not found" });
    res.json(results[0]);
  });
});

// สร้าง Profile ใหม่
router.post("/profiles", (req, res) => {
  const { name, email, age } = req.body;
  const sql = "INSERT INTO profiles (name, email, age) VALUES (?, ?, ?)";
  db.query(sql, [name, email, age], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, name, email, age });
  });
});

// ตั้งค่าการเก็บไฟล์
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// ตรวจสอบประเภทไฟล์ (เฉพาะภาพ)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type. Only JPEG, PNG, and JPG are allowed."),
      false
    );
  }
};

const upload = multer({ storage, fileFilter });

// อัปเดตข้อมูล Profile
router.put("/profiles/:id", upload.single("image"), (req, res) => {
  const { id } = req.params;
  const {
    nickname,
    birthday,
    generation,
    github,
    status,
    image,
    original_school,
    gpax,
    address,
    tel,
    email,
    facebook,
    emergency_tel,
    relationship,
    congenital_disease,
    allergic_thing,
    health_coverage,
    health_coverage_place,
    military_status,
  } = req.body;

  const imagePath = req.file
    ? req.file.path
    : image.split("http://localhost:3000/")[1];

  // ดึงรูปโปรไฟล์เก่าจาก DB
  const sqlGetOldImage = "SELECT image FROM users WHERE user_id = ?";
  db.query(sqlGetOldImage, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const oldImage = result[0].image;

    // ลบรูปโปรไฟล์เก่า
    if (oldImage !== imagePath) {
      const oldImagePath = path.join(__dirname, "..", oldImage);

      if (fs.existsSync(oldImagePath)) {
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.error("Error deleting old image:", err);
          } else {
            console.log("Old image deleted successfully.");
          }
        });
      }
    }
  });

  const sql =
    "UPDATE users SET nickname = ?, birthday = ?, generation = ?, github = ?, status = ?, image = ?, original_school = ?, gpax =?, address = ?, tel = ?, email = ?, facebook = ?, emergency_tel = ?, relationship = ?, congenital_disease = ?, allergic_thing = ?, health_coverage =?, health_coverage_place = ?, military_status = ? WHERE user_id = ?";
  db.query(
    sql,
    [
      nickname,
      birthday,
      generation,
      github,
      status,
      imagePath,
      original_school,
      gpax,
      address,
      tel,
      email,
      facebook,
      emergency_tel,
      relationship,
      congenital_disease,
      allergic_thing,
      health_coverage,
      health_coverage_place,
      military_status,
      id,
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0)
        return res.status(404).json({ error: "Profile not found" });
      res.json({ message: "Profile updated successfully" });
    }
  );
});

// ลบข้อมูล Profile
router.delete("/profiles/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM profiles WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Profile not found" });
    res.json({ message: "Profile deleted successfully" });
  });
});

module.exports = router;

const express = require('express');
const app = express();
const cors = require('cors');
const { readdirSync } = require('fs');
const bodyParser = require('body-parser');
const { Pool} = require('pg');
const allversionRouter = require("./Routes/routes")

require('dotenv').config()
// เปิดใช้งาน CORS
app.use(cors({
    origin:[ 'https://final-project-499.vercel.app','https://final-project-499-sceneryviews-projects.vercel.app','http://localhost:5000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));

// ใช้ body-parser เพื่อแปลงข้อมูล JSON
app.use(bodyParser.json());

// ตั้งค่าการเชื่อมต่อฐานข้อมูล MySQL
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// เส้นทางหลัก
app.get("/", (req, res) => {
  res.send("สวัสดีจาก 6400833 รัตนากรณ์ การุณ");
});

app.use("/api",allversionRouter)

// กำหนดพอร์ตที่ Express จะใช้
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`เซิร์ฟเวอร์ Express ทำงานบนพอร์ต ${PORT}`);
});


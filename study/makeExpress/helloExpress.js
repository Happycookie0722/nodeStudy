// express 모듈 불러오기
const express = require("express");
const app = express();
const port = 3000;

// /으로 요청이 오는 경우 실행 됨
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end("Hello, express");
});

// 서버를 열고 클라이언트 요청을 기다림
app.listen(port, () => {
  console.log(`START SERVER : use ${port}`);
})
const http = require("http");
const url = require("url");
http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");
    
// 객체와 함께 in 연산자를 사용하면 객체의 키가 있는지 검사
    if(path in urlMap) urlMap[path](req, res);
    else notFound(req, res);
  }).listen("3000", () => console.log("라우터2 리팩토링 서버 열기"));

const user = (req, res) => {
  // 쿼리 스트링 데이터를 userInfo 에 할당
  const userInfo = url.parse(req.url, true).query;
  // 결과값으로 이름과 나이 설정
  res.end(`[user] name: ${userInfo.name}, age : ${userInfo.age}`);
}

const feed = (req, res) => {
  res.end(`
    <ul>
      <li>picture1</li>
      <li>pictrue2</li>
      <li>pictrue3</li>
      <li>pictrue4</li>
    </ul>
  `)
}

const notFound = (req, res) => {
  res.statusCode = 404;
  res.end("404 page not found");
}

const urlMap = {
  "/" : (req, res) => res.end("HOME"),
  "/user" : user,
  "/feed" : feed,
}
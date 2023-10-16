const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(3000, () => "익스프레스로 라우터 리팩토링하기");

// GET 메서드의 라우팅 설정
app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) {
  const user = url.parse(req.url, true).query;

// 결과값으로 유저명과 나이 제공
// res.end 대신 res.json 을 사용하여  JSON 타입으로 보여주기도 하고, charset=utf-8을 자동으로 설정
  res.json(`[user] name : ${user.name}, age : ${user.age}`);
}

// 호이스팅 사용을 위해 const 대신 function 사용
// feed(req, res) 의 첫번째 인수로 _ 기호를 넣은 이유는
// 함수 인터페이스 구조상 넣을 수밖에 없을 때의 관례
function feed(_, res) {
  res.json(`
    <ul>
      <li>picture1</li>
      <li>pictrue2</li>
      <li>pictrue3</li>
      <li>pictrue4</li>
    </ul>
  `)
}

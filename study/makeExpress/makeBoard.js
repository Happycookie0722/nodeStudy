const url = require("url");
const express = require("express");
const app = express();
const port = 3000;
// 게시글 리스트로 사용 할 posts 배열
let posts = [];

// req.body 를 사용하려면 JSON 미들웨어를 사용해야 함
// app.use(express.json())을 실행하지 않으면 req.body 값이 undefined 로 반환 됨
app.use(express.json());

// POST 요청 시 컨텐츠 타입이 application/x-www-form-urlencoded인 경우 파싱
app.use(express.urlencoded({extended : true}));

// get 요청이 오는 경우 콜백 함수 실행
app.get("/", (req, res) => {
  // res.end() 함수의 인수로는 문자열과 바이트 버퍼 형식만 올 수 있음
  // 게시글 리스트를 JSON 형식으로 보여줌
  res.json(posts);
})

// posts 로 POST 요청이 오는 경우 콜백 함수를 실행
app.post("/posts", (req, res) => {

  // HTTP 요청의 body 데이터를 구조분해하여 변수에 할당
  // application/x-www-form-urlencoded 타입, 즉 title=타이틀&name=이름&text=내용 형식의 데이터를 
  // urlencoded 미들웨어가 객체로 변경해서 req.body 에 추가 
  const { title, name, text } = req.body;

  // posts 리스트에 새로운 게시글 정보 추가
  posts.push({ 
    id : posts.length + 1,
    title,
    name,
    text,
    createdDt : Date(),
  })
})

app.delete("/posts/:id", (req, res) => {

  // id 변수에 요청(req)의 path에 할당된 변수 id를 할당
  // :id 부분에 데이터가 들어오면 문자열 타입으로 params.id 에 할당
  const id = req.params.id;

  // 글 삭제 로직
  // 게시판 글 중에 id 이외의 값만 뽑아서 filteredPosts에 다시 할당
  // +id 는 문자열인 id 를 숫자로 다시 변환한다는 의미
  const filteredPosts = posts.filter((post) => post.id !== +id);

  // 글 삭제 확인 로직.
  const isLengthChanged = posts.length !== filteredPosts.length;
  posts = filteredPosts;

  // posts 에서 게시글이 삭제 된 경우 OK를 응답하고 return.
  if(isLengthChanged) {
    res.json("OK");
    return;
  }

  // 게시글에 변경이 없는 경우 "NOT CHANGED" 를 반환
  res.json("NOT CHANGED");
});

app.listen(port, () => {
  console.log("welcome posts START");
})
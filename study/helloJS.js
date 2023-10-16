/* 
  require() 함수는 모듈을 읽어오는 함수입니다. http 모듈을 불러와서 http 변수에 할당했습니다. 
  모듈명과 변수명은 다르게 해도 문제는 없지만, 특별한 경우가 아니라면 위와 같이 이름 짓는 것이 관행.
*/
const http = require("http"); // http 객체 생성
let count = 0;

/*
  createServerQ
  ()는 서버 인스턴스를 만드는 함수입니다. 인수로는 콜백 함수를 받는데, 콜백 함수
  에서는 http 서버로 요청이 들어오면 해당 요청을 처리 할 함수를 설정합니다. 콜백 함수는 요청 처
  리에 사용할 요청(req)과응답(res) 객체를 인수로 받습니다.
*/
const server = http.createServer((req, res) => { // 서버 객체 생성
  log(count);

// 요청에 대한 상태 코드를 200으로 설정합니다. http 프로토콜에서 200은 성공을 의미
  res.statusCode = 200;

/*
  콘텐츠 타입을 ‘text/plain’으로 설정했습니다. 콘텐츠 타입은 해당 콘텐츠가 어
  떤 형태의 데이터인지를 나타냅니다. text/plain은 ‘텍스트를 평문으로 해석하겠다’라는 뜻입니
  다. text/html이라면 텍스트를 html로 해석한다는 뜻이 됩니다. 
*/
  res.setHeader("Content-Type", "text/plain"); // 헤더 설정 
  res.write("hello\n") // 응답값 설정

/*
  setTimeoutO은 콜백 함수와 숫자를 인수로 받습니다. 숫자는 밀리초이며 
  해당 시간이 지나면 콜백 함수를 실행합니다.
*/
  setTimeout(() => {
    res.end("Node.js") // 2초 후 Node.js 출력
  }, 2000);
});

function log(count) {
  console.log((count += 1));
}

/*
  사용할 포트 번호를 8000번으로 지정합니다. 또한 IP가 생략되었으므로 
  기본값인 localhost 혹은 127.0.0.1로 서버에 접근할수 있습니다.
*/
server.listen(8000, () => console.log("Hello, Node.js")); // 8000번 포트로 서버 실행
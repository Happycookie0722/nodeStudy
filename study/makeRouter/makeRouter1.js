const http = require("http");

// url 모듈을 로딩하고 url 변수에 할당
const url = require("url");

http
  .createServer((req, res) => {
/*
  url 모듈을 사용해 요청(req)으로 받은 url의
  pathname을 얻어냅니다. url이 “localhost：3000/user”라면 
  pathname은 “/user”가 됩니다. parse() 함수의 두 번째
  인수로 있는 true는 쿼리 스트링도 함께 파싱할지 여부를 설정하는 변수. 
  경로명 다음의 ? 기호 뒤에 키=값의 형태로 붙입니다. 
*/
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");
    // 한글이 깨질때는 charset=utf-8 붙이기
    // res.setHeader("Content-Type", "text/html; charset=utf-8");

    // user 결과값 설정
    if(path === "/user") { 
      // “[user] name : andy, age： 30”을 전송.
      res.end("[user] name : andy, age : 30"); 
    } else if (path === "/feed") { // feed 에 대한 결과값
      // 콘텐츠 타입이 text/html이므로 응답으로 받은 문자열을 브라우저에서 HTML로 해석
      res.end(` 
        <ul>
          <li>picture1</li>
          <li>pictrue2</li>
          <li>pictrue3</li>
          <li>pictrue4</li>
        </ul>
      `); 
    } else { 
      // /user와 /feed 이외의 요청은 페이지가 없다는 404 에러
      res.statusCode = 404;
      res.end("404 page not found"); 
    }
  })
  .listen("3000", () => console.log("라우터 만들기"));
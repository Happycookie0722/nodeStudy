console.log("require로 호출할 경우 실행");

// require 로 호출할 때 반환되는 객체를 저장하는 변수.
// module 은 현재 모듈을 의미하고, exports 는 외부에 노출할 객체를 저장하는 변수
// sample-package 를 설치한 프로젝트에서는 require('sample-package')로 module.exports 에 있는 값을 가져올 수 있다
module.exports = {
  add : (a, b) => a + b,
  sub : (a, b) => a - b,
  multi : (a, b) => a * b,
  div: (a, b) => a / b
}
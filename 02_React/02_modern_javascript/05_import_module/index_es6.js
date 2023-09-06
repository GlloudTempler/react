// import받을 js파일
// import받을 js파일
// import : 기능(변수/함수)를 다른 js파일에서 가져오기
// 사용법 : import{변수명, 함수명....}from "js파일경로/파일명;"
import{odd, even, hello} from "./var_es6.js";

// 예제 : 값이 홀수인지 짝수인지 판단하기
let num = 3;
if(num % 2 === 0) {
    console.log(even);
    hello()
}else {
    console.log(odd);
    hello()
};


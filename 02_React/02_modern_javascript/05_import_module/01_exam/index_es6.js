// TODO import 받아서 결과값 출력
// TODO num이 3의 배수인지 판단해서 가져온 변수를 이용하여 출력
// 입력 : x
// 출력 : 3의 배수

import {three, notThree} from "./var_es6.js";

// TODO import하세요
// 초기값
let num = 3;
if(num % 3 === 0) {
    console.log(three)
}else {
    console.log(notThree)
}

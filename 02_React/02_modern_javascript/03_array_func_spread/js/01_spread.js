// spread(스프레드 연산자) 연산자
// 리액트 많이 나옴
// ! 1) 배열의 복사 : 원본을 훼손하지 않음
// let arr1 = [1,2,3,4,5];
// // 사용법 : ...배열이름
// // 예제1)
// let arr2 = [...arr1, 6,7,8,9];
// console.log(arr2);
// 예제2)
// let str1 = "paper block";
// let str2 = [...str1];
// console.log(str2);

// 예제3)
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let arr = [...arr1, ...arr2];
// console.log(arr); // [1,2,3,4,5,6]

// 향상된 for문
// let arr = [1,2,3,4,5,6];
// console.log("일반");
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// console.log("향상")
// for (const e of arr) {
//     console.log(e); // e : 배열의 값
// }

// 2) 함수에서의 스프레드 연산자 사용 예
// 2-1) 함수 매개변수 : rest연산자(=스프레드 연산자)
// 용도 : 매개변수들을 모두 더해서 합계를 구하는 함수
// function add(...rest) {
//     let sum = 0;
//     for (const item of rest) {
//         sum = sum + item; // item == 배열의(매개변수들의) 값
//     }
//     return sum;
// }
// console.log(add(1));
// console.log(add(1, 2));
// console.log(add(1, 2, 3));

// 2-2) js 내장함수에서의 스프레드 연산자 응용
// 아래에서 최소값 구하기
// let numbers = [9,4,7,1];
// let result = Math.min(...numbers); //1
// console.log(result);

// 3) 객체에서의 스프레드 연산자 사용
// TODO 객체의 속성이 없으면 추가되고, 있으면 수정됨
let currentState = {
    name:"철수",
    species:"human"
}
// 사용법 : ...객체변수
// 객체 속성 추가
currentState = {...currentState, age: 10};
console.log(currentState);

// 객체 속성 수정
currentState = {...currentState, age: 12};
console.log(currentState);
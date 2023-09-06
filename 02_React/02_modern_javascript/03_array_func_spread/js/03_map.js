// map 함수 (리액트에서 반복문 대용으로 사용)
// 예제 1)
// 숫자배열에서 제곱수를 구하는 새로운 배열을 만드세요
// 용도 : 배열을 조작해서 새로운 복사본 배열을 만들때 사용
// 특징 : 1)리턴값
// 사용법 : let 변수 = 배열변수.map((value)=>{반복문})

// let numbers = [1,2,3,4,5];
// let result = numbers.map((value) => value*value);
// console.log(result);

// 예제 2) map함수에 js내장함수 사용하기
// 주어진 배열의 제곱근 구하기
// Math.sqrt()
// let numbers = [1,2,3,4,5];
// let result = numbers.map(Math.sqrt);
// console.log(result);

// 입력 1 2 4
// let num = prompt("숫자배열").split(" ").map(Number);

// console.log(num);

// 연습문제1)
// 결과 : [1, 4, 6]
// let numbers = [1, 2, 3];
// let result = numbers.map((value) => value + value);
// console.log(result);

// 예제 : 객체 조작
// [] == 배열, {} == 객체
// 객체배열에서 나이만 뽑아서 새로운 배열 만들기
// let users = [
//     {name: 'YD', age:22},
//     {name: 'bill', age:32},
//     {name: 'andy', age:21},
//     {name: 'roky', age:35}
// ];
// let ages = users.map((value)=>value.age);
// console.log(ages);

// 연습문제 2)
// 결과 : ["가!", "나!", "다!"]
// let chars = ["가", "나", "다"];
// let chars2 = chars.map((value)=>value+"!");
// console.log(chars2);
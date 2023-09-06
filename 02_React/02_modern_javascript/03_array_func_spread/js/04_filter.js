// filter 함수
// 함수의 조건이 참인 것만 뽑아서 몇개만 새로운 배열을 만듬
// 원본배열보다 개수가 작음
// 특징 : 리턴값있음

// 예제 1)
// 아래 배열에서 3보다 큰 수만 뽑아서 새로운 배열을 만듬
// 사용법) let 변수 = 배열변수.filter((value)=>{조건문;})
// let numbers = [1,2,3,4,5];
// let result = numbers.filter((value)=> value > 3);
// console.log(result);

// 예제 2) 객체 조작
// 돈이 300000초과인 사람만 뽑아 새로운 배열로 만드시오
// let guys = [
//     {name:"YD", money:500000},
//     {name:"bill", money:400000},
//     {name:"andy", money:300000},
//     {name:"rocky", money:200000}
// ]

// let result = guys.filter((m)=> m.money>300000);
// console.log(result);

// 연습문제 1)
// filter함수 사용해서 조작
// 결과 1, 2만 나오기
// let numbers = [1,2,3,4,5];
// let result = numbers.filter((value)=> value <3);
// console.log(result);

// 연습문제 2)
// filter함수 사용 조작
// 결과[3]
// 조건 : value > 2 && value < 4
// let numbers2 = [1,2,3,4,5];
// let result2 = numbers2.filter((value)=> value >2 && value <4);
// console.log(result2);


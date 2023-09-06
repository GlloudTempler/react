// node : 1) 비동기 기능(성능 증가)
// 자바스크립트 코딩(비동기 프로그래밍)
// 비동기 : 요청하면 결과가 먼저 처리한 곳에서 주는대로 실행함
//  장점 : 성능 증가
//  단점 : 순서에 맞는 결과가 중요하면 결과가 꼬일 수 있음
// 예) 은행 계좌 : 입금 출금 (비동기 시 입금되기 전에 출금될 수 있음)
// TODO 해결책 promise 이용 : 순서에 따라 실행을 할 수 있음
// 참고) 동기 : 요청한 순서대로 결과가 옴
// 예제 :
// 1st 순서 :
// console.log("학교에 값니다.");
// 2nd 순서 : 
// 일정시간동안 지연해서 실행하는 함수
// 사용법 : setTimeout(함수(), 지연시간(ms));
// setTimeout(()=> {
//     console.log("학교에 도착했습니다.");
// }, 1000);
// 3rd 순서 : 
// console.log("열심히 코딩을 합니다.");

// TODO: promise를 이용해서 개선
// 알필요없음 : promise 객체 생성(x)
var goSchool = new Promise((resolve, reject) => {
    // 2초 지연 함수 : Promise 객체에 넣음
    setTimeout(function() {
        console.log("학교에 도착했습니다.");
        // resolve() : 결과 성공했다는 확인 함수
        resolve();
    }, 2000);
});

// ! 여기서부터 중요
// 1st 실행
console.log("학교에 갑니다.")
// 2nd : 비동기 코딩(순서를 지켜 출력시키기[then함수 사용])
goSchool.then(()=>{
    // console.log("학교에 도착했습니다.") 싫행이 끝나면
    // 아래 실행문이 실행되게 보장하는 함수 : then()
    // TODO promise 객체안에 실행이 성공하면 then() 자동 실행되는 구조임
    // TODO promise 결과는 언제 올지 모름
   console.log("열심히 코딩을 합니다.")
});


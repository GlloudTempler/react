// promise : 비동기 코딩에서 순서에 따라 실행되게 해주는 객체
// 예제 2) 아래 promise객체가 있음
// 성공 : 10보다 작은 값이 들어옴
// 실패 : 10보다 크면
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var num = parseInt(prompt("10 미만의 숫자를 입력하십시오"));
        if( num < 10 ) {
            // 결과가 성공 시 실행됨
            // 매개변수값을 .then 함수 안으로 전달할 수 있음
            // .then() 으로 전달됨
            resolve(num); 
        } else {
            // 결과가 실패 시 실행됨
            // 매개변수값을 .then 함수 안으로 전달할 수 있음 
            // .catch() 로 전달됨
            reject(`오류 :  ${num}은 10이상입니다`);
        }
    }, 1000);
});

// ! 여기부터 작성
// TODO promise객체의 리턴함수 then(), catch() 사용법
// then() : promise 객체안의 코딩이 성공하면 실행되는 함수
// catch() : promise 객체안의 코딩이 실패하면 실행되는 함수
promise.then((num) => {
    // promise 객체 안의 코딩이 성공했을 때 자동 실행
    console.log(num + " 10미만의 숫자를 입력하셨네요");
})
.catch((error) => {
    // 실패했을 때 자동 실행됨
    console.log(error);
})
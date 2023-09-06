import React, { useEffect } from 'react'

function D_SpreadOperator() {
    // 화면이 뜰때 자동 실행되는 이벤트 함수 : 생명주기(생성)
    useEffect(()=>{
        // ...(spread)연산자 연슴
        let num = {
            name: "박대기",
            email: "waiting@gmail.com"
        };

        console.log({name : "홍박사"});
        // TODO: num의 name 값 수정
        console.log({...num, name : "홍박사"});

        // TODO: 연습문제
        // TODO 원본 객체의 속성은 모두 유지한채 name: "임꺽정"
        // TODO 결과 : {name : "임꺽정", email :""}
        let num2 = {name : "", email: ""}

        console.log({...num2, name:"임꺽정"})
        
        // 예제2)
        let num3 = {
            name: "홍박사",
            email: "hong@daum.net"
        }
        let attrValue = "honh@naver.com";
        // 하드코딩 지양 , 소프트코딩
        console.log({...num3, email:attrValue});

        // 예제3)
        let num4 = {
            name: "홍박사",
            email: "hong@daum.net"
        }

        let attrValue2 = "honh@naver.com"; //속성값
        let attrName = "email"; //속성명
        // 속성명에 변수를 사용할 때는 : [변수명]
        // 속성값에 변수를 사용할 때는 : 변수명
        console.log({...num4, [attrName]:attrValue2});

        // TODO: 연습문제2
        // TODO attrName3 에는 속성명 "phone"을 넣고,
        // TODO attrValue3에는 속성값 "010-5678-1234"
        // TODO 변수를 활용해서 객체속성을 수정해 보세요.

        let num5 = {
            age: 15,
            phone: "010-1234-5674"
        }

        let attrValue3 = "010-5678-1234";
        let attrName3 = "phone"
        console.log({...num5, [attrName3]:attrValue3});
        
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default D_SpreadOperator
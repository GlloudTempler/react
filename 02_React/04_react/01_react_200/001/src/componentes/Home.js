// 리액트 페이지(component) 단축키 : rfce
import React from 'react'

function Home() {
  // TODO 변수를 정의하는 곳
  let array = ["a", "b", "c"]; // 일반변수
  // ! 리액트 특징 : 변수값 + html태그를 같이 사용이 가능함(JSX 표현식)
  let input = <b>문자열 출력되나요?</b>;

  // TODO 함수를 저으이하는 곳 : 
  // 함수선언식 : function 함수명(){}
  // 함수표현식 : let 함수명 = fucntion(){};
  // 화살표함수 : let 함수명 = () => {};
  // 화살표함수 단축키 : nfn
  const testFunc = () => { 
    return "함수입니다."
  }

  // 클릭이벤트 함수
  const myClick = () => { 
    alert("클릭완료");
   }

  // TODO html 태그 + JSX표현식({}) : return 안에 코딩함
  // TODO 웹브라우저 화면에 표시되는 영역
  return (
    // 웹브라우저 화면에 표시되는 영역
    <div>
      {/* 문자열 출력 : */}
      {/* 사용법 : {"문자열"} */}
      {"문자열 출력"}
      {<br/>}
      {input}
      {<br/>}
      {<b>출력 가능</b>}

      {/* 2) 숫자 출력: */}
      {<br/>}
      {1 * 2 + 3 - 2}
      {<br/>}
      {/* 3) 문자열 붙이기 */}
      {"abc" + "가나다라"}
      {<br/>}

      {/* 4) JSX표현식 : {<태그>{문자열}</태그>} */}
      {<b>{"안녕하세요"}</b>}
      {<br/>}

      {/* 5) 배열 출력 */}
      {["가", "나", "다"]}
      {<br/>}
      {[1,2,3]}
      {<br/>}
      {array[1]}
      {<br/>}

      {/* 6) 함수 출력 : */}
      {/* 함수의 사용 : 함수명() */}
      {testFunc()}
      {<br/>}
      {testFunc() + "문자열 붙이기"}
      <br/>

      {/* 7) 3항 연산자 : 조건식(축약형) */}
      {/* 사용법 : (조건식==true)? 참 : 거짓; */}
      {true? "true" : "false"}
      <br/>
      {false? "true" : "false"}
      <br/>

      {/* 8) HTML태그 속성에 {} 넣어보기 */}
      <a href={'http://www.naver.com'}>네이버</a>
      <br/>
      <button onClick={myClick}>클릭하세요</button>
      <br/>

      {/* 9) 자바스크립트 내장 함수 */}
      {console.log("출력출력")}
      <br/>

      {/* 오늘 요일(1~7) : new Date() */}
      {new Date().getDay()}
      <br/>
      {new Date().getFullYear() + "년"}
      <br/>
      {(new Date().getMonth()+1) + "월"}
      <br/>

      {/* ------------------------------- */}
      {/* 화면에 출력 안되는 것 */}
      {/* ------------------------------- */}
      {/* 10 )참/거짓(bool/boolean) : X */}
      {true}

      {/* 11) 객체 출력 */}
      {/* 해결책 : 문자열로 변경해서 출력 */}
      {/* {{name:"홍길동", email:"gil@naver.com"}} */}

      {/* 12) 조건문 : if문 : 사용불가 */}
      {/* 삼항연산자 사용 */}
      {/* {if(true) {return "true"}} */}

      {/* 13) 반복문 : for문 : 사용불가 */}
      {/* 해결책 : map() 함수 가능 */}
      {/* {for(let i=0; i<3; i++)}{console.log("aaa")} */}

    </div>
    
  )
}

export default Home
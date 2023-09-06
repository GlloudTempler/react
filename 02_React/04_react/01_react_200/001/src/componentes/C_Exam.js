// TODO 연습문제
// 클릭시 아래 결과
// 최초화면 : "안녕하세요"
// 결과 : "안녕"
import React, { useState } from 'react'
function C_Exam() {
    // TODO 1) 바인딩 변수 정의    
    let [element, setElement] = useState("안녕하세요");
    // TODO 2) myClick() 화살표 함수 : 안녕으로 수정
    const myClick = () => { 
        setElement("안녕");
     }
    
  return (
    <div>
        {element}
        <br/>
        <button onClick={myClick}>문자열 변경</button>
    </div>
  )
}

export default C_Exam
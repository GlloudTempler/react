// E_Exam3.js
// TODO 부모에서 데이터 전송 시 아래 결과와 같이 출력
// 출력 : 이 책의 이름은 처음 만난 파이썬 입니다.
//        이 책은 총 300 페이지 입니다.

import React, { useEffect } from 'react'

function E_Exam3(props) {

  return (
    <div>
        <h1>이 책의 이름은 {props.name} 입니다.</h1>
        <h2>이 책은 총 {props.numOfPage}페이지 입니다.</h2>
        <h2>{`이 책은 총 ${props.numOfPage}페이지 입니다.`}</h2>
    </div>
  )
}

export default E_Exam3
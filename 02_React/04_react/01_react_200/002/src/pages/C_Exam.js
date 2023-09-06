// TODO 데이터 전달받아 아래와 같이 콘솔에 출력
// TODO 화면이 뜰때 자동 출력


import React from 'react'
import { useEffect } from 'react';

function C_Exam(props) {
    // TODO: 생명 주기 함수 (생성)
    // TODO: 화면이 뜰때 자동 실행됨
useEffect(()=>{
    console.log(props.prop_value);
    console.log("useEffect");
},[])

  return (
    <div>C_Exam</div>
  )
}

export default C_Exam
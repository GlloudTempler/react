import React from 'react'

function F_Clock() {

  // 화면에 보이는 부분 : 아래 return
  return (
    
    <div>
      <h1>리액트 바보</h1>
      <h2>
        현재 시간 :
        {/* new Date().toLocaleTimeString() : 국가별 현재 시간 출력 */}
        {new Date().toLocaleTimeString()}
      </h2>
    </div>
  )
}

export default F_Clock
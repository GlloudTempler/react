// TODO 리액트의 조건문 : 2) 3항 연산자를 사용
import React from 'react'
import { useState } from 'react';


function D_ConfirmButton() {
    // TODO 변수 정의
    let [isConfirmed, setIsConfirmed] = useState(false);


    const handleConfirm = () => { 
        setIsConfirmed(!isConfirmed)
     }
  return (
    <div>

        {/* 예제 : 버튼 클릭하면 문구가 확인하기로 바뀜
                                    disabled=false(활성화)[true(비활성화)]
        */}
        <button onClick={handleConfirm}
                disabled={isConfirmed}>
            {
                (isConfirmed==true)? "확인됨" : "확인하기"
            }
            </button>    
    </div>
  )
}

export default D_ConfirmButton
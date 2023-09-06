import React from 'react'
import { useState } from 'react';
//TODO 아래 변수에 값이 있다.
// is Full이 true이면
// <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
//   아니면
// <p style={{ color: "blue" }}>입장할 수 있습니다.</p>
//  를 출력하세요.


function E_ConfirmButton_Exam() {
    let [isFull, setIsFull] = useState(false);

    const change = () => { 
        setIsFull(!isFull);
    }
  return (
    <div>
        <button className='btn btn-warning' onClick={change}>
            {
                (isFull === true)?
                <p style={{ color: "blue" }}>입장할 수 있습니다.</p> :
                <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
            }
        </button>
    </div>
  )
}

export default E_ConfirmButton_Exam
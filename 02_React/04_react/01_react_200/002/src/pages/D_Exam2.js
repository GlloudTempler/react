
// TODO 아래 생명주기 함수 2개를 만들어서 출력
// TODO 1) 화면이 뜰 때 출력
// TODO 결과 : mount call
// TODO 2) tmpState2라는 변수의 값이 변경되면 콘솔에 출력
// TODO 결과 : false

import React, { useEffect, useState} from 'react'

function D_Exam2() {
    let [tmpState2, setTmpState2] = useState(true);
    // TODO 1) 생병주기 함수(생성)
    useEffect(()=> {
        console.log("mount call")
    },[])

    // TODO 2) 생명주기 함수(수정) : tmpState2 : true -> false(콘솔에 출력)
    useEffect(()=> {
        console.log(tmpState2)
    },[tmpState2])

    // TODO 2-2) 클릭 이벤트 함수 정의
    const handleClick = () => {
        setTmpState2(false);
    };

  return (
    <div>
        <h2>[ ThIS IS souldComponentUpdate FUNCTION ]</h2>
        <button onClick={handleClick}>클릭</button>
            
    </div>
  )
}

export default D_Exam2
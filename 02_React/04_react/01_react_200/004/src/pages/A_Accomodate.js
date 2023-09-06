// TODO react의 조건문 : 1) 논리연산자 2) 3항연산자
import React, { useState } from 'react'
import "../assets/styles.css"

function A_Accomodate() {
    //TODO 변수/함수 정의
    // 사용법 : let[변수명, set변수명] = useState(초기값)
    let [isFull, setIsFull] = useState(true);
    let [count, setCount] = useState(0);
    let [person, setPerson] = useState(0);
    // TODO 함수정의
    // 증가버튼
    const increaseCount = () => { 
        // count변수 1씩 증가시키기
        person = count + 1;
        // count setter함수에 넣기
        setCount(person);
    }

    // 감소버튼
    const decreaseCount = () => { 
        // count변수 1씩 감소시키기
        if(count > 0) {
            person = count - 1;
        }
        // count setter함수에 넣기
        setCount(person);
    }
    // JSX 표현식에선 if/for문 못씀
    // 함수 안에서는 가능
    
    // if(count > 10) {
    //     setIsFull(true);
    // }else {
    //     setIsFull(false);
    // }

  return (
    <div>
        {/* count 변수 화면 출력 */}
        <p>{`총 ${count}명을 수용했습니다.`}</p>

        {/* 증가버튼 */}
        <button className='btn btn-primary' onClick={increaseCount}>입장</button>
        
        {/* isFull이 참이면 && 실행문(태그)  : 실행문이 화면에 보임 */}
        {/* 거짓이면 실행x */}
        {
            isFull &&
                <p style={{color: "red"}}>정원이 가득찼습니다.</p>
        }

        {/* 감소버튼 */}
        <button className='btn btn-primary' onClick={decreaseCount}>퇴장</button>
    </div>
  )
}

export default A_Accomodate
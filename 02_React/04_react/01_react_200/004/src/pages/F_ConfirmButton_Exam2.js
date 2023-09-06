import React, { useState } from "react";
// TODO : 아래 변수 count 에 9 의 값이 있다.
//  10을 초과하면 ( count>10 )
// <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
//  아니면 <p style={{ color: "blue" }}>입장할 수 있습니다.</p> 를 출력하세요.

function F_ConfirmButton_Exam2() {
  let [isFull, setIsFull] = useState(true);
  let [count, setCount] = useState(0);
  let [person, setPerson] = useState(0);

  const increaseCount = () => {
    // count변수 1씩 증가시키기
    // count setter함수에 넣기
    if(count > 9) {
      setIsFull(false)
    } else {
     person = count + 1;
     setCount(person);
    }
  };

  return (
    <div>
      현재 정원 : {count}
      <br />
      <button onClick={increaseCount} disabled={isFull? false:true}>
        {isFull === true ? 
          <p style={{ color: "blue" }}>입장할 수 있습니다.</p>
         : 
          <p style={{ color: "red" }}>정원이 가득찼습니다.</p>
        }
      </button>
    </div>
  );
}

export default F_ConfirmButton_Exam2;

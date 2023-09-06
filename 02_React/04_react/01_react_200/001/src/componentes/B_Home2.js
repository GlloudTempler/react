// B_Home2
// rfce
// TODO 화면 바인딩
import React from 'react'
import { useState } from 'react';
function B_Home2() {
    // TODO 변수를 정의하는 곳 :
    // 최초 1번만 정상적으로 화면에 표시
    // 수정 -> 화면에 수정된 값이 보이지 않음
    let hello = "안녕하세요"; //일반변수

    // 바인딩 변수 : 리액트에서는 화면에서 수정이 일어났을때 정상적으로 보이게 만들어 주는 변수
    // 사용법 : let[변수명, 수정함수] = useState("값")
    let [element, setElement] = useState("hi")

    // TODO 함수정의 :
    // nfn
    // 화면 바인딩 없음 : 수정해서 화면에 나타나지 않음
    const myClick = () => { 
        hello = "hellllo";
     }

    //  TODO 화면 바인딩 있음 : 수정하면 화면에 나타남
    const myClick2 = () => { 
        // 리액트의 수정함수
        setElement("hiiiiiiii");
     }

    // TODO 웹브라우저 화면에 나오는 부분 : 
  return (
    <div>
        {hello}
        <button onClick={myClick}>클릭</button>
        <br/>

        {element}
        <button onClick={myClick2}>클릭2</button>
        <br/>
    </div>
  )
}

export default B_Home2
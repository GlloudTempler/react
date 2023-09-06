import React from 'react'
import "../assets/styles.css"
import { useState } from 'react';
// TODO 연습문제 : 아래 노란버튼을 클릭하면 파란버튼이 보이게 하세요

function A_Accomodate_Exam() {
    let [watch, setWatch] = useState(false);

    const yellowClick = () => { 
        if(watch === true){
            setWatch(false);
        }else if(watch === false) {
            setWatch(true);
        }
        
    }

    const blueClick = () => {
        // isButton : false -> true : setIsButton(변경될 값)
    }

  return (
    <div>
        <button onClick={yellowClick} className="btn btn-warning">노란 버튼</button>
        <br/>
        {
        watch &&
        <button onClick={blueClick} className="btn btn-primary">파란 버튼</button>
        }
        
    </div>
  )
}

export default A_Accomodate_Exam
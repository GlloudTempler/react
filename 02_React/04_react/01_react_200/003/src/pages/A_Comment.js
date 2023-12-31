import React, { useState } from 'react'
// Comment.css import
import "../assets/Comment.css";
import "../assets/styles.css";

function A_Comment() {
  // TODO 변수 정의 : 
  // 사용법 : let [변수, set변수] = useState(초기값)
  // set변수 : setter 함수 (변수 값 저장 용도 함수)
  // 화면 바인딩 용도 : useState() 함수 (훅(hook)함수 : useXXX())
  let [name, setName] = useState("홍박사");
  let [comment, setComment] = useState("홍홍홍");
  
  return (
    <div className="wrapper">
    <div className="imageContainer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        className="image"
      />
    </div>

    <div className="contentContainer">
      <span className="nameText">{name}</span><br/>
      <span className="commentText">{comment}</span>
    </div>
  </div>
  )
}

export default A_Comment
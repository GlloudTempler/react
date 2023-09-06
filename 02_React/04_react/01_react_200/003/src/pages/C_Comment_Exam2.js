import React, { useEffect, useState } from 'react'
import "../assets/styles.css";

function C_Comment_Exam2() {
    // TODO useState사용해서 4가지 변수 만들기
    // name="제목"
    // let link="http://www.naver.com" 
    // let img = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
    let [name, setName] = useState("제목")
    let [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png")
    let [link, setLink] = useState("http://www.naver.com")
    let [isUpdate, setIsUpdate] = useState(true)
    
  return (
    <div className="wrapper">
      {
        // TODO : image 는 img 태그의 src 에 넣고, link 주소는 a href 속성에 넣어서 출력하시요
        // TODO : isUpdate 가 true 이면 화면에 "true" 라고 출력하고, false 이면 "false"라고 출력하세요.
      }
      <div className="contentContainer">
        <span className="commentText">
          <img src={image} />{" "}
        </span>
        <br/>
        <span className="nameText">{name} </span>
        <span className="commentText">
          <a href={link}>{link} </a>
        </span>
        {/* TODO: 3항연산자 사용 */}
        <span className="commentText">{isUpdate? "true":"false"} </span>
      </div>
    </div>
  )
}

export default C_Comment_Exam2
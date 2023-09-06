import React, { useState } from 'react'
import "../assets/styles.css";


function B_Comment_Exam() {
    // TODO 변수
    let [title, setTitle] = useState("제목");
    let [publisher, setPublisher] = useState("작성자");
    let [author, setAuthor] = useState("저자");
    let [stock, setStock] = useState("재고");

  return (
    <div className="wrapper">
    {/* 빈공간 */}
    <div className="imageContainer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        className="image"
      />
    </div>

    {
      //TODO : 컴포넌트를 작성하세요
      //TODO : title = "제목", publisher="작성자",  author="저자", stock="재고"
    }
    <div className="contentContainer">
      <span className="nameText">{title} </span> <br/>
      <span className="commentText">{publisher} </span> <br/>
      <span className="commentText">{author} </span> <br/>
      <span className="commentText">{stock} </span> <br/>
    </div>
  </div>

  )
}

export default B_Comment_Exam
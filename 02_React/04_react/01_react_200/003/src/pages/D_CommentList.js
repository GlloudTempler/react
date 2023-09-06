// TODO 리액트의 반복문 : mpa() 함수 사용

import React, { useState } from 'react'
import "../assets/styles.css"

function D_CommentList() {
    // 객체배열 : [{},{}....] == JSON 문서 데이터 형태(인터넷 통신 거의 표준)
    // 프론트 <- (JSON 데이터) -> 백엔드(DB넣기)
    const initialComments = [
        {
            name: "이인제",
            comment: "안녕하세요 도둑입니다."
        },
        {
            name: "유재석",
            comment: "명수형은 나가있어"
        },
        {
            name: "강민경",
            comment: "유튜브 편집자 모집합니다."
        }
    ];

    // TODO: 변수/함수 정의
    // useState() 함수 이용 변수 정의
    // 사용법 : let[변수, set변수] = useState(초기값)
    let [comments, setComments] = useState(initialComments);

    // HTML 태그 작성 부분 : return
    // 사용법 : 배열변수.map((value, index(생략), array(생략))=>{반복문;});
    // value : 배열의 값, index : 배열의 번호, array : 배열
    // TODO map() 함수 : 배열함수.map(함수());
    // TODO 용도 : for문 대신 사용하는 구문
    // TODO 특징 : 배열변수의 크기(길이, 건수)만큼 자동으로 반복함(함수())
  return (
    <div>
        {
            comments.map((comment, index)=>{
                // ! 반복문 : JSX 표현식(js + html 섞어 쓸 수 있음)
                return (
                  // TODO 배열 수만큼 반복
                    <div className="wrapper" key={index}>
                    <div className="imageContainer">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                        className="image"
                      />
                    </div>
        
                    <div className="contentContainer">
                      <span className="nameText">{comment.name}</span> <br/>
                      <span className="commentText">{comment.comment}</span>
                    </div>
                  </div>
                )
            })
        }
    </div>
  )
}

export default D_CommentList
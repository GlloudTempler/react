import React, { useState } from "react";
// TODO 리액트에서 스타일속성 사용하기

function H_ProfileCard() {
  // TODO 변수정의
  let [title, setTitle] = useState("Inje Lee");

  return (
    <div
        style={{margin : 8,
                padding: 8,
                borderRadius: 8,
                backgroundColor: "#4ea04e"
            }}
    >
      {/* 코딩의 관례적 사용 : 어떤 변수에 어떤 값이 있으면 무조건 "true" */}
      {/* 변수에 null이 있으면 false; */}
      {title && <h1>{title}</h1>}
      <p>하이, 소플</p>
      <p>리액트 개발중</p>
    </div>
  );
}

export default H_ProfileCard;

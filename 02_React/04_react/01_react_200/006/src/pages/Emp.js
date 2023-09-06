import React, { useState } from 'react'

function Emp() {
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

export default Emp
// TODO 리액트 컴포넌트 디자인 적용하기 : css 파일 적용
// TODO 1) CSS파일 준비해서 import하면 적용
// TODO 프로젝트가 커질수록 디자인 클래스선택자들이 중첩될 수 있음
// TODO 2) 공통 디자인 적용 : 태그선택자 등을 자유롭게 코딩
// TODO 3) 클래스/id 선택자로 디자인 함 : 프로젝트명(dms01-클래스명 ~ dms05-클래스명)


import React from 'react'
// css파일 import
import "../assets/D_ImportComp.css"

function D_ImportComp() {

    // TODO 화면에 보이는 부분
  return (
    <div>
        {/* class="" => className="" : 리액트에서는 class대신 사용*/}
        <h2 className="dms01-h2">ImportComp</h2>
    </div>
  )
}

export default D_ImportComp
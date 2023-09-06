// TODO react에서 form입력양식 다루기
// TODO 단방향바인딩(화면바인딩), 수동바인딩(개발자 직접 코딩)
// ! 바인딩 : 변수의 값을 변경하면 -> 화면에 변경된 값이 바로 출력(자동으로 해줌)
// !! 화면의 값을 변경하면 -> 변수의 값을 변경해야함(자동으로 해주지 않음)
// TODO (바닐라 js) 1) 변수의 값을 가져와서 : querySelector()
// TODO             2) 변수의 값 수정해서 :
// TODO             3) innerHTML 화면에 넣기
import React from 'react'
import { useState } from 'react';

function A_SignUp() {
    // TODO 변수 정의
    let [name, setName] = useState(""); // 이름입력상자(input)와 바인딩(연결)
    let [gender, setGender] = useState("남자"); // 성별(select)과 바인딩(연결)
    
    // TODO 함수 정의
    // 버튼클릭 함수 : alert() 이름, 성별 출력
    const handleSubmit = (event) => { 
        // submit버튼 특징 : 페이지이동
        event.preventDefault(); //기본 기능 취소(방해) 함수
        alert("이름 : " + name + "\n" + "성별 : " + gender);
    }

    // ! 역방향 바인딩(수동코딩)
    // TODO: 화면 값 변경(event.target.value) -> 변수 값 변경
    const handleChangeName = (event) => {
        // 수정함수 : setter함수
        setName(event.target.value);//역방향 바인딩 코딩
    }

    const handleChangeGender = (event) => {
        // 수정함수 : setter함수
        setGender(event.target.value);//역방향 바인딩 코딩
    }

  return (
    <div className="container">
      <form>
        <label>
          이름:
          {/* 데이터 바인딩 : value={name} 
             name = "aaa" -> 화면 "aaa"
          */}
          <input
            type="text"
            value={name}
            name="name"
            onChange={handleChangeName}
          />
        </label>
        <br />
        <label>
          성별:
          {/* value : 먼저 선택된값 */}
          <select value={gender} name="gender" 
              onChange={handleChangeGender}>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
        </label>
        {/* 제출(submit) 버튼 */}
        {/* 기본 특징 : 페이지 이동 */}
        <button type="submit"
                onClick={handleSubmit}
        >제출</button>
      </form>
    </div>
  )
}

export default A_SignUp
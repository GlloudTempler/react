import React from "react";
import { useState } from 'react';
import "../assets/styles.css";
// TODO 연습문제 ) 아래 소스를 완성하세요
// 버튼을 클릭하면 isTable변수의 값을 true로 변환시켜 table출력
function A_Accomodate_Exam2() {
  let [watch, setWatch] = useState(false);

  const showTable = () => {
    setWatch(!watch);
  };

  return (
    <div>
      <button className="btn btn-warning" onClick={showTable}>
        테이블 보이기
      </button>
      <br />
      {watch && 
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Dname</th>
              <th scope="col">Loc</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Sales</td>
              <td>부산</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Development</td>
              <td>서울</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
}

export default A_Accomodate_Exam2;

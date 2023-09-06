import React, { useState } from "react";
// TODO 화면에 부트스트랩 목록태그를 이용해서 반복문으로 출력

function Emp() {
  const initialEmps = [
    {
      eno: 1,
      ename: "Scott",
    },
    {
      eno: 2,
      ename: "James",
    },
    {
      eno: 3,
      ename: "Kim",
    },
  ];

  // 바인딩변수
  let [emp, setEmp] = useState(initialEmps);

  return (
    <div className="container mt-5">
      {/* dept.map() 함수 실행 : 목록태그(ul-li(반복) : 부트스트랩) */}
      <ul class="list-group">
        {emp.map((value, index) => (
            <a
              href="#"
              class="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{index+1}. {value.ename}</h5>
                <small>3 days ago</small>
              </div>
              <p class="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </a>
        ))}
      </ul>
    </div>
  );
}

export default Emp;

import React from "react";
// TODO 연습문제 반복문 완성하기(ul li(반복))
// TODO 사용법) 배열변수.map((value, index)=>{return (태그)});

function H_Book() {
  const students = [
    {
      id: 1,
      name: "Inje",
    },
    {
      id: 2,
      name: "Steve",
    },
    {
      id: 3,
      name: "Bill",
    },
    {
      id: 4,
      name: "Jeff",
    },
  ];
  return (
    <div>
      <ul class="list-group">
        {/* 반복문 */}

        {students.map((student, index) => {
            return(
            
          <li className="list-group-item" key = {index}>{(index+1) + ". " + student.name}</li>
        )
        })
        }
      </ul>
    </div>
  );
}

export default H_Book;

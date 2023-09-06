// 리액트 주소 : http://localhost:3000/
// http://(프로토콜), localhost(인터넷주소 예)naver.com)
//                    (개인pc 인터넷주소)
//  3000 : 포트번호(0~90000)
// APP.js : 리액트의 첫 페이지(사이트 홈)
// =>리액트 서버가 가동되고 처음으로 실행되는 페이지(js)
// 리액트 페이지(js) : 컴포넌트(==페이지)
// 사용법 : 
// function 컴포넌트명() {
//   return{
//     <div>내용</div>
//   }
// }

import logo from './logo.svg';
import './App.css';
// 자식 컴포넌트(페이지) import
import Home from "./componentes/Home.js";
import B_Home2 from "./componentes/B_Home2.js";
import Header from './componentes/Header.js';
import Footer from './componentes/Footer';
import C_Exam from './componentes/C_Exam';
import D_ImportComp from './componentes/D_ImportComp';

// 최상위 부모 컴포넌트 : App(App.js)
// 자식 컴포넌트 : Homr(Home.js)
function App() {
  return (
    <div className="App">
      <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
        <h1>h1</h1>
      </div>
      {/* 머리말 */}
      {/* <Header></Header> */}
      {/* 주석 crtl + / */}
      {/* Home.js 컴포넌트 태그 */}
      {/* <Home></Home> */}
      {/* <B_Home2></B_Home2> */}
      {/* <C_Exam></C_Exam> */}
      <D_ImportComp></D_ImportComp>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

import React, { useState } from 'react'

//TODO 버튼 클릭하면 변수의 값을 true-false변경
function G_LandingPage() {
    // TODO 변수정의
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // TODO 함수정의
    const onClickLogin = () => { 
        // TODO 아래 코딩
        setIsLoggedIn(!isLoggedIn);
    }
    const onClickLogout = () => { 
        // TODO 아래 코딩
        setIsLoggedIn(!isLoggedIn);
    }
     
    
  return (
    <div>
        {
            (isLoggedIn===true)? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )
        }
    </div>
  )
}

export default G_LandingPage
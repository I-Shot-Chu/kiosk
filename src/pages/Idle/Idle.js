/**
 * IdlePage.js
 * 대기화면
 * 여러 이벤트 페이지를 일정 시간만큼 띄울 것
 * 이미지 클릭 시 메인 메뉴로 이동
 */

import "./Idle.css";

const IdlePage = () =>
{
    return (
        <>
            <a href = "/menu/newdrinks">
                <div className="slider">
                    <div class="slide"></div>
                    <div class="slide"></div>
                    <div class="slide"></div>
                    <div class="slide"></div>
                </div>
            </a>
        </>
    )
}

export default IdlePage;
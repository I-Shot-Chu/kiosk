/**
 * IdlePage.js
 * 대기화면
 * 여러 이벤트 페이지를 일정 시간만큼 띄울 것
 * 이미지 클릭 시 메인 메뉴로 이동
 */

import "./Idle.css";
<<<<<<< HEAD
import { language } from "../../store/store";

const img = [
    require("../../assets/images/images_idle/mainpage_first2.png"), 
    require("../../assets/images/images_idle/mainpage_second2.png"), 
];
=======
>>>>>>> e04aab92cc0bf821cbed55b99ae8ef6b82fb81b4

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
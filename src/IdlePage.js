/**
 * IdlePage.js
 * 대기화면
 * 여러 이벤트 페이지를 일정 시간만큼 띄울 것
 * 이미지 클릭 시 메인 메뉴로 이동
 */

import { useEffect, useState } from "react";
import "./IdlePage.css";
import { language } from "./store";

const img = ["mainpage_first.png", "mainpage_second.png"];

const IdlePage = () =>
{
    const [currentIndex, setCurrentIndex] = useState(0);

    const { lang, setLang } = language();

    useEffect(() => 
    {
        const intervalid = setInterval(() =>
        {
            setCurrentIndex((currentIndex + 1) % img.length);
        }, 4000);

        return () => clearInterval(intervalid);
    }, [currentIndex]);

    const onClickHandler = () => 
    {        
        setLang();
    }

    return (
        <div>
            <a href = "/menu/newdrinks">
                <h1 className = "idle_image_text">{lang ? "주문을 원하시면 클릭해주세요." : "Click to start order."}</h1>
                <img src = { img[currentIndex] } className = "idle_image" alt = "slide"/>
            </a>
            <button className = "idle_lang_button" onClick = {onClickHandler}><img src = {lang ? "flag3dusa.png" : "flag3dkor.png"} className = "idle_lang_img" alt = "lang"/></button>
        </div>
    )
}

export default IdlePage;
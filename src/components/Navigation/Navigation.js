import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";
import { language } from "../../store/store";

const Nav = () => {
    // 클릭된 항목을 관리할 상태
    const [activeItem, setActiveItem] = useState(null);

    const { lang } = language();
  
    // 클릭 시 선택된 항목을 상태로 설정
    const handleItemClick = (item) => {
      setActiveItem(item);
    };
  
    return (
      <div className="nav_container">
        <div className="nav_bar">
          {/* 메뉴 항목들 */}
          <div
            className={`nav_item ${activeItem === "newdrinks" ? "active" : ""}`}
            onClick={() => handleItemClick("newdrinks")}
          >
            <NavLink to="/menu/newdrinks" className="nav_link">
              {lang ? "추천 음료" : "[R] DRINK"}
            </NavLink>
          </div>
  
          <div
            className={`nav_item ${activeItem === "newdessert" ? "active" : ""}`}
            onClick={() => handleItemClick("newdessert")}
          >
            <NavLink to="/menu/newdessert" className="nav_link">
            {lang ? "추천 디저트" : "[R] DESSERT"}
            </NavLink>
          </div>
  
          <div
            className={`nav_item ${activeItem === "hotcoffee" ? "active" : ""}`}
            onClick={() => handleItemClick("hotcoffee")}
          >
            <NavLink to="/menu/hotcoffee" className="nav_link">
            {lang ? "커피" : "COFFEE"}
            </NavLink>
          </div>
  
          <div
            className={`nav_item ${activeItem === "hottea" ? "active" : ""}`}
            onClick={() => handleItemClick("hottea")}
          >
            <NavLink to="/menu/hottea" className="nav_link">
            {lang ? "티" : "TEA"}
            </NavLink>
          </div>
  
          <div
            className={`nav_item ${activeItem === "adejuice" ? "active" : ""}`}
            onClick={() => handleItemClick("adejuice")}
          >
            <NavLink to="/menu/ade&juice" className="nav_link">
            {lang ? "에이드 & 주스" : "ADE & JUICE"}
            </NavLink>
          </div>
  
          <div
            className={`nav_item ${activeItem === "smoothie" ? "active" : ""}`}
            onClick={() => handleItemClick("smoothie")}
          >
            <NavLink to="/menu/smoothie&frappe" className="nav_link">
            {lang ? "스무디 & 프라페" : "Smoothie"}<br></br>{lang ? null : " & Frappe"}
            </NavLink>
          </div>
  
          <div
            className={`nav_item ${activeItem === "hotdecaf" ? "active" : ""}`}
            onClick={() => handleItemClick("hotdecaf")}
          >
            <NavLink to="/menu/hotdecaf" className="nav_link">
            {lang ? "디카페인" : "DECAFFEIN"}
            </NavLink>
          </div>
  
          <div
            className={`nav_item ${activeItem === "hotdrinks" ? "active" : ""}`}
            onClick={() => handleItemClick("hotdrinks")}
          >
            <NavLink to="/menu/hotdrinks" className="nav_link">
            {lang ? "음료" : "DRINK"}
            </NavLink>
          </div>
  
          <div
            className={`nav_item ${activeItem === "dessert" ? "active" : ""}`}
            onClick={() => handleItemClick("dessert")}
          >
            <NavLink to="/menu/dessert" className="nav_link">
            {lang ? "디저트" : "DESSERT"}
            </NavLink>
          </div>
  
          <div
            className={`nav_item ${activeItem === "md" ? "active" : ""}`}
            onClick={() => handleItemClick("md")}
          >
            <NavLink to="/menu/md" className="nav_link">
            {lang ? "상품" : "MERCHANDISE"}
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
export default Nav;
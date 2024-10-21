import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";
import { language } from "../../store/store";

const Nav = () => {
    // 클릭된 항목을 관리할 상태
    const [activeItem, setActiveItem] = useState(null);

    return(
        <div>
            <ul>
                <NavLink to={"/menu/newdrinks"}>신 메뉴 /</NavLink>

                <NavLink to={"/menu/coffee"}>커피/ </NavLink>
                
                <NavLink to={"/menu/tea"}>티/ </NavLink>

                <NavLink to={"/menu/ade&juice"}>에이드&주스/ </NavLink>

                <NavLink to={"/menu/smoothie&frappe"}>스무디&프라페/ </NavLink>
                <br></br>
                <NavLink to={"/menu/decaf"}>디카페인/ </NavLink>

                <NavLink to={"/menu/drinks"}>음료/ </NavLink>

                <NavLink to={"/menu/dessert"}>디저트/ </NavLink>

                <NavLink to={"/menu/md"}>상품/ </NavLink>
            </ul>
        </div>
    );
  };
export default Nav;
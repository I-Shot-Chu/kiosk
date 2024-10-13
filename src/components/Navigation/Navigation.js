import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Nav = ()=>{

    return(
        <div>
            <ul>
                <NavLink to={"/menu/newdrinks"}>추천 음료/ </NavLink>
                <NavLink to={"/menu/newdessert"}>추천 디저트/ </NavLink>

                <NavLink to={"/menu/hotcoffee"}>커피/ </NavLink>

                <NavLink to={"/menu/hottea"}>티/ </NavLink>

                <NavLink to={"/menu/ade&juice"}>에이드&주스/ </NavLink>
                <NavLink to={"/menu/smoothie&frappe"}>스무디&프라페/ </NavLink>

                <NavLink to={"/menu/hotdecaf"}>디카페인/ </NavLink>

                <NavLink to={"/menu/hotdrinks"}>음료/ </NavLink>
                <br></br>
                <NavLink to={"/menu/dessert"}>디저트/ </NavLink>
                <NavLink to={"/menu/md"}>상품/ </NavLink>
            </ul>
        </div>
    )
}
export default Nav;
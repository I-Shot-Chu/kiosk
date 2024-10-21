import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = ()=>{

    return(
        <div className="navbar">
            <div className="navbar-header">
                <span className="navbar-title">I-Shot-Chu☞☜</span>

            </div>
            <ul>
                <NavLink to={"/menu/newdrinks"}>New Drinks </NavLink>
                <NavLink to={"/menu/newdessert"}>New Dessert </NavLink>
                <NavLink to={"/menu/hotcoffee"}>Hot Coffee </NavLink>
                <NavLink to={"/menu/icecoffee"}>Ice Coffee </NavLink>
                <NavLink to={"/menu/hottea"}>Hot Tea </NavLink>
                <NavLink to={"/menu/icetea"}>Ice Tea </NavLink>
                <NavLink to={"/menu/ade&juice"}>Ade & Juice </NavLink>
                <NavLink to={"/menu/smoothie&frappe"}>Smoothie & Frappe </NavLink>
                <NavLink to={"/menu/hotdecaf"}>Hot Decaffein Coffee </NavLink>
                <NavLink to={"/menu/icedecaf"}>Ice Decaffein Coffee </NavLink>
                <NavLink to={"/menu/hotdrinks"}>Hot Drinks </NavLink>
                <NavLink to={"/menu/icedrinks"}>Ice Drinks </NavLink>
                <NavLink to={"/menu/dessert"}>Dessert </NavLink>
                <NavLink to={"/menu/md"}>Md Product </NavLink>
            </ul>
        </div>
    )
}
export default Nav;
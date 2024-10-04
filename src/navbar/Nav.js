import { NavLink } from "react-router-dom";

const Nav = ()=>{

    return(
        <div>
            <ul>
                <NavLink to={"/menu/hotcoffee"}>Hot Coffee</NavLink>
                <NavLink to={"/menu/icecoffee"}>Ice Coffee</NavLink>
                <NavLink to={"/menu/hottea"}>Hot Tea</NavLink>
                <NavLink to={"/menu/icetea"}>Ice Tea</NavLink>
                <NavLink to={"/menu/ade&juice"}>Ade & Juice</NavLink>
                <NavLink to={"/menu/smoothie&frappe"}>Smoothie & Frappe</NavLink>
                <NavLink to={"/menu/hotdecaf"}>Hot Decaffein Coffee</NavLink>
                <NavLink to={"/menu/icedecaf"}>Ice Decaffein Coffee</NavLink>
                <NavLink to={"/menu/newdrinks"}>New Drinks</NavLink>
                <NavLink to={"/menu/dessert"}>Dessert</NavLink>
                <NavLink to={"/menu/newdessert"}>New Dessert</NavLink>
            </ul>
        </div>
    )
}
export default Nav;
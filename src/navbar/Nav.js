import { NavLink } from "react-router-dom";

const Nav = ()=>{

    return(
        <div>
            <ul>

                <NavLink to={"/hotcoffee"}>Hot Coffee</NavLink>
                <NavLink to={"/icecoffee"}>Ice Coffee</NavLink>
                <NavLink to={"/hottea"}>Hot Tea</NavLink>
                <NavLink to={"/icetea"}>Ice Tea</NavLink>
                <NavLink to={"/ade&juice"}>Ade & Juice</NavLink>
                <NavLink to={"/smoothie&frappe"}>Smoothie & Frappe</NavLink>
                <NavLink to={"/hotdecaf"}>Hot Decaffein Coffee</NavLink>
                <NavLink to={"/icedecaf"}>Ice Decaffein Coffee</NavLink>
                <NavLink to={"/newdrinks"}>New Drinks</NavLink>
                <NavLink to={"/dessert"}>Dessert</NavLink>
                <NavLink to={"/newdessert"}>New Dessert</NavLink>
                <NavLink to={"/purchase"}>결제</NavLink>

            </ul>
        </div>
    )
}
export default Nav;
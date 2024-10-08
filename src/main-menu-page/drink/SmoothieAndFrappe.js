import { useEffect, useState } from "react";
import { smoothieAndFrappe } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";
import ShoppingCart from "../../ShoppingCart";



const SmoothieAndFrappe = ({cart})=>{

    const [smoothieAndFrappeMenu, setSmoothieAndFrappeMenu] = useState([]);

    useEffect(()=>{
        setSmoothieAndFrappeMenu(smoothieAndFrappe())
    },[]);

    return(
        <div>
            {smoothieAndFrappeMenu.map(smoothieAndFrappe => <DrinkMenu key={smoothieAndFrappe.menuCode} drinkMenu={smoothieAndFrappe}/>)}
        </div>
    )
}

export default SmoothieAndFrappe;
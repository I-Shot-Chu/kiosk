import { useEffect, useState } from "react";
import { smoothieAndFrappe } from "../getMenuDetails";
import { DrinkMenu } from "../ShowItems";
import ShoppingCart from "../../store/ShoppingList";




const SmoothieAndFrappe = ()=>{

    const [smoothieAndFrappeMenu, setSmoothieAndFrappeMenu] = useState([]);

    useEffect(()=>{
        setSmoothieAndFrappeMenu(smoothieAndFrappe())
    },[]);

    return(
        <>
        <div>
            {smoothieAndFrappeMenu.map(smoothieAndFrappe => <DrinkMenu key={smoothieAndFrappe.menuCode} drinkMenu={smoothieAndFrappe}/>)}
        </div>
        <ShoppingCart/>        
        </>
    )
}

export default SmoothieAndFrappe;
import { useEffect, useState } from "react";
import { smoothieAndFrappe } from "../getMenuDetails";
import { DrinkMenu } from "../ShowItems";




const SmoothieAndFrappe = ()=>{

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
import { useEffect, useState } from "react";
import { smoothieAndFrappe } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";




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
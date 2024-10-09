import { useEffect, useState } from "react";
import { dessert } from "../getMenuDetails";
import { DessertMenu } from "../ShowItems";



const Dessert = ()=>{

    const [dessertMenu, setDessertMenu] = useState([]);

    useEffect(()=>{
        setDessertMenu(dessert())
    },[]);

    return(
        <div>
            {dessertMenu.map(dessert => <DessertMenu key={dessert.menuCode} dessertMenu={dessert}/>)}
        </div>
    )
}

export default Dessert;
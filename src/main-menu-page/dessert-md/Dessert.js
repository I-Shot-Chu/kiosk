import { useEffect, useState } from "react";
import { dessert } from "../MenuAPI";
import { DessertMenu } from "../MenuItem";
import ShoppingCart from "../../ShoppingCart";


const Dessert = ({cart})=>{

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
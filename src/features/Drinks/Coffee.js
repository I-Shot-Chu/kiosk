import { useEffect, useState } from "react";
import { coffee } from "../getMenuDetails";
import { DrinkMenu } from "../ShowItems";

export const Coffee = ()=>{

    const [coffeeMenu, setCoffeeMenu] = useState([]);

    useEffect(()=>{
        setCoffeeMenu(coffee())
    },[]);

    return(
        <>
            <div>
                {coffeeMenu.map(coffee => <DrinkMenu key={coffee.menuCode} drinkMenu={coffee}/>)}
            </div>
        </>
    )
}
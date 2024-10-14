import { useEffect, useState } from "react";
import { DrinkMenu } from "../ShowItems";
import { drinks } from "../getMenuDetails";



export const Drinks = ()=>{

    const [drinksMenu, setDrinksMenu] = useState([]);

    useEffect(()=>{
        setDrinksMenu(drinks())
    },[]);

    return(
        <>
        <div>
            {drinksMenu.map(drinks => <DrinkMenu key={drinks.menuCode} drinkMenu={drinks}/>)}
        </div>
        </>
    )
};
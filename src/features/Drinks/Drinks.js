import { useEffect, useState } from "react";
import { DrinkMenu } from "../ShowItems";
import { hotDrinks, iceDrinks } from "../getMenuDetails";



export const HotDrinks = ()=>{

    const [drinksMenu, setDrinksMenu] = useState([]);

    useEffect(()=>{
        setDrinksMenu(hotDrinks())
    },[]);

    return(
        <>
        <div>
            {drinksMenu.map(hotDrinks => <DrinkMenu key={hotDrinks.menuCode} drinkMenu={hotDrinks}/>)}
        </div>
        </>
    )
}


export const IceDrinks = ()=>{

    const [drinksMenu, setDrinksMenu] = useState([]);

    useEffect(()=>{
        setDrinksMenu(iceDrinks())
    },[]);

    return(
        <>
        <div>
            {drinksMenu.map(iceDrinks => <DrinkMenu key={iceDrinks.menuCode} drinkMenu={iceDrinks}/>)}
        </div>
        </>
    )
}
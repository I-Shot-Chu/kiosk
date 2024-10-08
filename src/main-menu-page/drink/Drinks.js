import { useEffect, useState } from "react";
import { DrinkMenu } from "../MenuItem";
import ShoppingCart from "../../ShoppingCart";
import { hotDrinks, iceDrinks } from "../MenuAPI";



export const HotDrinks = ({cart})=>{

    const [drinksMenu, setDrinksMenu] = useState([]);

    useEffect(()=>{
        setDrinksMenu(hotDrinks())
    },[]);

    return(
        <div>
            {drinksMenu.map(hotDrinks => <DrinkMenu key={hotDrinks.menuCode} drinkMenu={hotDrinks}/>)}
        </div>
    )
}


export const IceDrinks = ({cart})=>{

    const [drinksMenu, setDrinksMenu] = useState([]);

    useEffect(()=>{
        setDrinksMenu(iceDrinks())
    },[]);

    return(
        <div>
            {drinksMenu.map(iceDrinks => <DrinkMenu key={iceDrinks.menuCode} drinkMenu={iceDrinks}/>)}
        </div>
    )
}
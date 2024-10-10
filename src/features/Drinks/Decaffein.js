import { useEffect, useState } from "react";
import { hotDecafCoffee, iceDecafCoffee } from "../getMenuDetails";
import { DrinkMenu } from "../ShowItems";
import ShoppingCart from "../../store/ShoppingList";



export const HotDecaf = ()=>{

    const [decafMenu, setDecafMenu] = useState([]);

    useEffect(()=>{
        setDecafMenu(hotDecafCoffee())
    },[]);

    return(
        <>
            <div>
            {decafMenu.map(hotDecaf => <DrinkMenu key={hotDecaf.menuCode} drinkMenu={hotDecaf}/>)}
            </div>
            <ShoppingCart/>
        </>

    )
}


export const IceDecaf = ()=>{

    const [decafMenu, setDecafMenu] = useState([]);

    useEffect(()=>{
        setDecafMenu(iceDecafCoffee())
    },[]);

    return(
        <>
            <div>
            {decafMenu.map(iceDecaf => <DrinkMenu key={iceDecaf.menuCode} drinkMenu={iceDecaf}/>)}
            </div>
            <ShoppingCart/>
        </>
    )
}


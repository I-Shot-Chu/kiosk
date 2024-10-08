import { useEffect, useState } from "react";
import { hotDecafCoffee, iceDecafCoffee } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";
import ShoppingCart from "../../ShoppingCart";



export const HotDecaf = ( {cart} )=>{

    const [decafMenu, setDecafMenu] = useState([]);

    useEffect(()=>{
        setDecafMenu(hotDecafCoffee())
    },[]);

    return(
        <div>
            {decafMenu.map(hotDecaf => <DrinkMenu key={hotDecaf.menuCode} drinkMenu={hotDecaf}/>)}
        </div>
    )
}


export const IceDecaf = ( {cart} )=>{

    const [decafMenu, setDecafMenu] = useState([]);

    useEffect(()=>{
        setDecafMenu(iceDecafCoffee())
    },[]);

    return(
        <div>
            {decafMenu.map(iceDecaf => <DrinkMenu key={iceDecaf.menuCode} drinkMenu={iceDecaf}/>)}
        </div>
    )
}


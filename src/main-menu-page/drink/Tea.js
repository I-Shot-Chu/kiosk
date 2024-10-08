import { useEffect, useState } from "react";
import { hotTea, iceTea } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";
import ShoppingCart from "../../ShoppingCart";



export const HotTea = ({cart})=>{

    const [teaMenu, setTeaMenu] = useState([]);

    useEffect(()=>{
        setTeaMenu(hotTea())
    },[]);

    return(
        <div>
            {teaMenu.map(hotTea => <DrinkMenu key={hotTea.menuCode} drinkMenu={hotTea}/>)}
        </div>
    )
}


export const IceTea = ({cart})=>{

    const [teaMenu, setTeaMenu] = useState([]);

    useEffect(()=>{
        setTeaMenu(iceTea())
    },[]);

    return(
        <div>
            {teaMenu.map(iceTea => <DrinkMenu key={iceTea.menuCode} drinkMenu={iceTea}/>)}
        </div>
    )
}

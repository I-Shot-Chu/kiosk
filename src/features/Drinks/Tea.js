import { useEffect, useState } from "react";
import { hotTea, iceTea } from "../getMenuDetails";
import { DrinkMenu } from "../ShowItems";
import ShoppingCart from "../../store/ShoppingList";



export const HotTea = ()=>{

    const [teaMenu, setTeaMenu] = useState([]);

    useEffect(()=>{
        setTeaMenu(hotTea())
    },[]);

    return(
        <>
        <div>
            {teaMenu.map(hotTea => <DrinkMenu key={hotTea.menuCode} drinkMenu={hotTea}/>)}
        </div>
        <ShoppingCart/>        
        </>
    )
}


export const IceTea = ()=>{

    const [teaMenu, setTeaMenu] = useState([]);

    useEffect(()=>{
        setTeaMenu(iceTea())
    },[]);

    return(
        <>
        <div>
            {teaMenu.map(iceTea => <DrinkMenu key={iceTea.menuCode} drinkMenu={iceTea}/>)}
        </div>
        <ShoppingCart/>        
        </>
    )
}

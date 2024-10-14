import { useEffect, useState } from "react";
import { decafCoffee } from "../getMenuDetails";
import { DrinkMenu } from "../ShowItems";



export const Decaf = ()=>{

    const [decafMenu, setDecafMenu] = useState([]);

    useEffect(()=>{
        setDecafMenu(decafCoffee())
    },[]);

    return(
        <>
            <div>
            {decafMenu.map(decafCoffee => <DrinkMenu key={decafCoffee.menuCode} drinkMenu={decafCoffee}/>)}
            </div>
        </>

    )
};


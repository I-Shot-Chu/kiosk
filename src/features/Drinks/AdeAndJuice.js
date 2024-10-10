import { useEffect, useState } from "react";
import { adeAndJuice } from "../getMenuDetails";
import { DrinkMenu } from "../ShowItems";
import ShoppingCart from "../../store/ShoppingList";



const AdeAndJuice = ()=>{


    const [adeAndJuiceMenu, setAdeAndJuiceMenu] = useState([]);


    useEffect(()=>{
        setAdeAndJuiceMenu(adeAndJuice())
    },[]);

    return(
        <>
            <div>
            {adeAndJuiceMenu.map(adeAndJuice => <DrinkMenu key={adeAndJuice.menuCode} drinkMenu={adeAndJuice}/>)}
            </div>
            <ShoppingCart/>
        </>
    )

}

export default AdeAndJuice;
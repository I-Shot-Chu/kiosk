import { useEffect, useState } from "react";
import { adeAndJuice } from "../getMenuDetails";
import { DrinkMenu } from "../ShowItems";
import { useCartStore } from "../../store/store";

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
        </>
    )

}

export default AdeAndJuice;
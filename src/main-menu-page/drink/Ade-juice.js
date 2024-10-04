import { useEffect, useState } from "react";
import { adeandjuice } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";



const AdeandJuice = ()=>{


    const [adeandJuiceMenu, setAdeandJuiceMenu] = useState([]);


    useEffect(()=>{
        setAdeandJuiceMenu(adeandjuice())
    },[]);

    return(
        <div>
            {adeandJuiceMenu.map(adeandjuice => <DrinkMenu key={adeandjuice.menuCode} drinkMenu={adeandjuice}/>)}

        </div>
    )

}

export default AdeandJuice;
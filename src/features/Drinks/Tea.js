import { useEffect, useState } from "react";
import { tea } from "../getMenuDetails";
import { DrinkMenu } from "../ShowItems";

export const Tea = ()=>{

    const [teaMenu, setTeaMenu] = useState([]);

    useEffect(()=>{
        setTeaMenu(tea())
    },[]);

    return(
        <>
        <div>
            {teaMenu.map(tea => <DrinkMenu key={tea.menuCode} drinkMenu={tea}/>)}
        </div>
        </>
    )
};
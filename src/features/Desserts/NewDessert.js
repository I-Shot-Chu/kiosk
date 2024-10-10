import { useEffect, useState } from "react";
import { newDessert } from "../getMenuDetails";
import { DessertMenu } from "../ShowItems";

const NewDessert = ()=>{

    const [newDessertMenu, setNewDessertMenu] = useState([]);

    useEffect(()=>{
        setNewDessertMenu(newDessert())
    },[]);

    return(
        <>
        <div>
            {newDessertMenu.map(newDessert => <DessertMenu key={newDessert.menuCode} dessertMenu={newDessert}/>)}
        </div>
        </>
    )
}

export default NewDessert;
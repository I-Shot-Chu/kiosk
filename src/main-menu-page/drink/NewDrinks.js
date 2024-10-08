import { useEffect, useState } from "react";
import { newDrinks } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";



const NewDrinks = ()=>{


    const [newDrinksMenu, setNewDrinksMenu] = useState([]);


    useEffect(()=>{
        setNewDrinksMenu(newDrinks())
    },[]);

    return(
        <div>
            {newDrinksMenu.map(newDrinks => <DrinkMenu key={newDrinks.menuCode} drinkMenu={newDrinks}/>)}
        </div>
    )

}

export default NewDrinks;
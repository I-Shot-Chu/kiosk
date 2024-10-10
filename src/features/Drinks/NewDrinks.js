import { useEffect, useState } from "react";
import { newDrinks } from "../getMenuDetails";
import { DrinkMenu } from "../ShowItems";
import ShoppingCart from "../../store/ShoppingList";



const NewDrinks = ()=>{


    const [newDrinksMenu, setNewDrinksMenu] = useState([]);


    useEffect(()=>{
        setNewDrinksMenu(newDrinks())
    },[]);

    return(
        <>
            <div>
            {newDrinksMenu.map(newDrinks => <DrinkMenu key={newDrinks.menuCode} drinkMenu={newDrinks}/>)}
            </div>
            <ShoppingCart/>
        </>
    )

}

export default NewDrinks;
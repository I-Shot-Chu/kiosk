import { useEffect, useState } from "react";
import { hotCoffee, iceCoffee } from "../MenuAPI";
import { DrinkMenu } from "../MenuItem";





export const HotCoffee = ()=>{

    const [coffeeMenu, setCoffeeMenu] = useState([]);


    useEffect(()=>{
        setCoffeeMenu(hotCoffee())
    },[]);

    return(
        <div>
            {coffeeMenu.map(hotCoffee => <DrinkMenu key={hotCoffee.menuCode} drinkMenu={hotCoffee}/>)}
       </div>
    )

}



export const IceCoffee = () => {

    const [coffeeMenu, setCoffeeMenu] = useState([]);

    useEffect(()=>{
        setCoffeeMenu(iceCoffee())
    },[]);

    return(
        <div>
            {coffeeMenu.map(iceCoffee => <DrinkMenu key={iceCoffee.menuCode} drinkMenu={iceCoffee}/>)}
       </div>
    )
}
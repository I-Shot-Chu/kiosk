import { Link } from "react-router-dom";


// 음료
export const DrinkMenu = ({drinkMenu}) =>{

    return(
        
        <Link to={`/menu/hotcoffee/${drinkMenu.menuCode}`}>
            <div className="DrinkMenuItem">
                <img src={`/images/${drinkMenu.menuCode}.jpg`} alt={`${drinkMenu.menuName}`}/>
                <ul>{drinkMenu.menuName}</ul>
                <ul>{drinkMenu.menuPrice}</ul>
            </div>
        </Link>
    )
}


//디저트
export const DessertMenu = ({dessertMenu}) =>{

    return(

        <Link to={`/dessertMenu/${dessertMenu.menuCode}`}>
            <div className="DessertMenuItem">
                <ul>{dessertMenu.menuName}</ul>
                <ul>{dessertMenu.menuPrice}</ul>
            </div>
        </Link>
    )
}
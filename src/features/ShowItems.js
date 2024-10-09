import { Link } from "react-router-dom";

// 음료
export const DrinkMenu = ({ drinkMenu }) => {
    const imageUrl = require(`../assets/images/images_menus/${drinkMenu.menuCode}.jpg`);

    return (
        <Link to={`/menu/${drinkMenu.menuCode}`}>
            <div className="DrinkMenuItem">
                <img src={imageUrl} alt={`${drinkMenu.menuName}`} width="100px" />
                <h4>{drinkMenu.menuName}</h4>
                <ul>{drinkMenu.menuPrice}원</ul>
            </div>
        </Link>
    );
};

// 디저트
export const DessertMenu = ({ dessertMenu }) => {
    const imageUrl = require(`../assets/images/images_menus/${dessertMenu.menuCode}.jpg`);

    return (
        <Link to={`/menu/${dessertMenu.menuCode}`}>
            <div className="DessertMenuItem">
                <img src={imageUrl} alt={`${dessertMenu.menuName}`} width="100px" />
                <h4>{dessertMenu.menuName}</h4>
                <ul>{dessertMenu.menuPrice}원</ul>
            </div>
        </Link>
    );
};

// MD 상품
export const MdItem = ({ mdProduct }) => {
    const imageUrl = require(`../assets/images/images_menus/${mdProduct.menuCode}.jpg`);

    return (
        <Link to={`/menu/${mdProduct.menuCode}`}>
            <div className="mdProduct">
                <img src={imageUrl} alt={`${mdProduct.menuName}`} width="100px" />
                <h4>{mdProduct.menuName}</h4>
                <ul>{mdProduct.menuPrice}원</ul>
            </div>
        </Link>
    );
};

import { useState, useEffect } from "react";
import { drinkgetMenuDetail, dessertgetMenuDetail, mdgetMenuDetail } from "../../features/getMenuDetails";
import { ExtraIce, ExtraShot, ExtraSugar, ExtraTopping } from "./Option";
import { language, useCartStore } from "../../store/store";
import './ShowExtraOptions.css'

const MenuDetail = ({ menuCode, onClickHandler2 }) => {
    
    const { addToCart } = useCartStore();

    const { lang } = language();

    const [menu, setMenu] = useState({
        menuName: '',
        enName:'',
        menuPrice: 0,
        detail: { description: '', image: '' } 
    });

    //추가메뉴(샷,휘핑)
    const [extraMenu, setExtraMenu] = useState({
        shot: null,
        sugar: null,
        ice: null,
        topping: null
    });

    useEffect(() => {
        const drinkMenuDetail = drinkgetMenuDetail(menuCode);
        const dessertMenuDetail = dessertgetMenuDetail(menuCode);
        const mdMenuDetail = mdgetMenuDetail(menuCode);

        const selectedMenuDetail = drinkMenuDetail || dessertMenuDetail || mdMenuDetail;

        setMenu(selectedMenuDetail || {
            menuName: '',
            menuPrice: 0,
            detail: { description: '', image: '' }
        });
    }, [menuCode]);

    // Handle selection for each category
    const handleOptionSelect = (category, option, price) => {
        setExtraMenu((prevExtraMenu) => ({
            ...prevExtraMenu,
            [category]: { option, price }
        }));
    };
    
    // Calculate total price for the selected options
    const totalExtraPrice = Object.values(extraMenu)
        .filter(item => item !== null)
        .reduce((acc, item) => acc + item.price, 0);
    const finalTotalPrice = menu.menuPrice + totalExtraPrice;

    const onClickHandler = () => {
        const formattedExtraMenu = Object.values(extraMenu).filter(item => item !== null); // Convert object to array
        
        addToCart({
            ...menu,
            extraMenu: formattedExtraMenu, // Pass formatted extraMenu as an array
            finalTotalPrice
        });
        onClickHandler2();
    };

    const imageUrl = require(`../../assets/images/images_menus/${menuCode}.jpg`);

    return (
        <>
            <h2 className="option_title">{lang ? "선택하신 상품의 옵션 상품을 모두 선택해 주세요." : "Choose the option(s) what you want."}</h2>

            {menu.menuName ? (
                <div className="menu_detail_container">
                    <img src={imageUrl} alt={menu.menuName} className="menu_img"/>
                    <div className="menu_text_container">
                        <h3 className="menu_name">{lang ? `${menu.menuName}` : `${menu.enName}`}</h3>
                        <h3 className="menu_price">{menu.menuPrice}{lang ? "원" : "Won"}</h3>
                        <p className="menu_desc">{menu.detail.description}</p>
                    </div>
                </div>
            ) : (
                <p>{lang ? "메뉴를 불러오는 중 입니다.." : "Loading..."}</p>
            )}

            {menu.menuCode < 142 ? (
                <>
                    <ExtraShot extraMenu={extraMenu} handleOptionSelect={(option, price) => handleOptionSelect('shot', option, price)} />
                    <ExtraSugar extraMenu={extraMenu} handleOptionSelect={(option, price) => handleOptionSelect('sugar', option, price)} />
                    <ExtraIce extraMenu={extraMenu} handleOptionSelect={(option, price) => handleOptionSelect('ice', option, price)} />
                    <ExtraTopping extraMenu={extraMenu} handleOptionSelect={(option, price) => handleOptionSelect('topping', option, price)} />
                    <h3 className="menu_total_price">총 가격: {finalTotalPrice}원</h3>
                    <div className="button_container">
                        <button onClick={onClickHandler} className="menu_add_button">{lang ? "주문담기" : "Add to list"}</button>
                        <button onClick = {onClickHandler2} className="cancel_button">{lang ? "취소" : "Cancel"}</button>
                    </div>
                </>
            ) : (
                <>
                    <h3 className="menu_total_price">총 가격: {finalTotalPrice}원</h3>
                    <div className="button_container">
                        <button onClick={onClickHandler} className="menu_add_button">주문담기</button>
                        <button onClick = {onClickHandler2} className="cancel_button">취소</button>
                    </div>
                </>
            )}
        </>
    );
};

export default MenuDetail;

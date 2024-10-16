import Modal from "react-modal";
import { useState } from "react";
import MenuDetail from "../pages/option/ShowExtraOptions";
import { language } from "../store/store";
import './ShowItems.css';

const MenuItem = ({ menu }) =>
{
  const imageUrl = require(`../assets/images/images_menus/${menu.menuCode}.jpg`);
  const [modal, setModal] = useState(false);
  const { lang } = language();

  const onClickHandler = () => setModal(true);
  const onClickHandler2 = () => setModal(false);

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <>
        <button onClick={onClickHandler} className="menu_button">
          <div className="menuItem">
            <img src={imageUrl} alt={menu.menuName} width="100px" />
            <h4>{truncateText(lang ? menu.menuName : menu.enName, lang ? 10 : 15)}</h4>
            <p>{menu.menuPrice.toLocaleString()}{lang ? "원" : " Won"}</p>
          </div>
        </button>
      <Modal 
        isOpen={modal} 
        ariaHideApp={false} 
        className={'menu_detail_modal'}>
        <MenuDetail menuCode={menu.menuCode} onClickHandler2={onClickHandler2} />
      </Modal>

    </>
  );
};

// 음료
export const DrinkMenu = ({ drinkMenu }) =>
{
  return <MenuItem menu={drinkMenu} type="drink" />;
};

// 디저트
export const DessertMenu = ({ dessertMenu }) =>
{
  return <MenuItem menu={dessertMenu} type="dessert" />;
};

// MD 상품
export const MdItem = ({ mdProduct }) =>
{
  return <MenuItem menu={mdProduct} type="md" />;
};
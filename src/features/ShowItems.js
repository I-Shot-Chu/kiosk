import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import MenuDetail from "../pages/option/ShowExtraOptions";

// 음료
export const DrinkMenu = ({ drinkMenu }) => {
    const imageUrl = require(`../assets/images/images_menus/${drinkMenu.menuCode}.jpg`);
    
    const [modal, setModal] = useState(false);

    const onClickHandler = () =>
    {
        setModal(true);
    }

    const onClickHandler2 = () =>
    {
        setModal(false);
    }

    return (
        <>
            <button onClick={onClickHandler}>
                <div className="DrinkMenuItem">
                    <img src={imageUrl} alt={`${drinkMenu.menuName}`} width="100px" />
                    <h4>{drinkMenu.menuName}</h4>
                    <ul>{drinkMenu.menuPrice}원</ul>
                </div>
            </button>
            <Modal isOpen = {modal} ariaHideApp={false} shouldCloseOnOverlayClick = {false}>
            <MenuDetail menuCode = {drinkMenu.menuCode} onClickHandler2 = {onClickHandler2}/>
            <button onClick = {onClickHandler2}>취소</button>
            </Modal>
        </>
    );
};

// 디저트
export const DessertMenu = ({ dessertMenu }) => {

    const imageUrl = require(`../assets/images/images_menus/${dessertMenu.menuCode}.jpg`);

    const [modal, setModal] = useState(false);

    const onClickHandler = () =>
    {
        setModal(true);
    }

    const onClickHandler2 = () =>
    {
        setModal(false);
    }

    return (
        <>
            <button onClick={onClickHandler}>
            <div className="DessertMenuItem">
                <img src={imageUrl} alt={`${dessertMenu.menuName}`} width="100px" />
                <h4>{dessertMenu.menuName}</h4>
                <ul>{dessertMenu.menuPrice}원</ul>
            </div>
            </button>
            <Modal isOpen = {modal} ariaHideApp={false} shouldCloseOnOverlayClick = {false}>
            <MenuDetail menuCode = {dessertMenu.menuCode} onClickHandler2 = {onClickHandler2}/>
            <button onClick = {onClickHandler2}>취소</button>
            </Modal>
        </>  
    );
};

// MD 상품
export const MdItem = ({ mdProduct }) => {
    const imageUrl = require(`../assets/images/images_menus/${mdProduct.menuCode}.jpg`);

    const [modal, setModal] = useState(false);

    const onClickHandler = () =>
    {
        setModal(true);
    }

    const onClickHandler2 = () =>
    {
        setModal(false);
    }

    return (
        <>
            <button onClick={onClickHandler}>
            <div className="DessertMenuItem">
                <img src={imageUrl} alt={`${mdProduct.menuName}`} width="100px" />
                <h4>{mdProduct.menuName}</h4>
                <ul>{mdProduct.menuPrice}원</ul>
            </div>
            </button>
            <Modal isOpen = {modal} ariaHideApp={false} shouldCloseOnOverlayClick = {false}>
            <MenuDetail menuCode = {mdProduct.menuCode} onClickHandler2 = {onClickHandler2}/>
            <button onClick = {onClickHandler2}>취소</button>
            </Modal>
        </>  
    );
};

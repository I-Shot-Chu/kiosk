import { useNavigate } from "react-router-dom";
import ShoppingCart from "../store/ShoppingList";
import { useState } from "react";
import Modal from "react-modal"
import { useCartStore } from "../store/store";

const Footer = () =>
{
    const { clearCart } = useCartStore();

    const [modal, setModal] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const handleClear = () =>
    {
        clearCart();
    }

    const onClickHandler = () =>
    {
        setModal(true);
        setIsModalOpen(true);
    }

    const onClickHandler2 = () =>
    {
        setModal(false);
        setIsModalOpen(false);
    }

    const onClickHandler3 = () =>
    {
        navigate("/payment");
    }

    return (
        <>
            <button onClick={handleClear}>전체 삭제</button>
            <h3>선택한 상품: </h3>
            <ShoppingCart isModalOpen={isModalOpen}/>
            <button onClick={onClickHandler}>결제하기</button>
            <Modal isOpen = {modal} ariaHideApp={false}>
                <h1>주문 내역을 다시 한 번 확인해주세요.</h1>
                <ShoppingCart isModalOpen = {isModalOpen}/>
                <button onClick={onClickHandler3}>결제</button>
                <button onClick = {onClickHandler2}>닫기</button>
            </Modal>
        </>
    )
}

export default Footer;
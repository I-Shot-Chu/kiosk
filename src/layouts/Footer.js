import { useNavigate } from "react-router-dom";
import ShoppingCart from "../store/ShoppingList";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useCartStore } from "../store/store";
import Timer from "./Timer";
import PaymentComponent from "../pages/Payment/Payment";

const Footer = () =>
{
    const [timeLeft, setTimeLeft] = useState(120);

    const { clearCart, cartItems, totalPrice } = useCartStore(); // Access cartItems from Zustand store

    const [modal, setModal] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [secondModal, setSecondModal] = useState(false);

    const navigate = useNavigate();

    // Reset timer when cart contents change
    useEffect(() =>
    {
        if (cartItems.length > 0)
        {
            setTimeLeft(120); // Reset the timer when cart is updated
        }
    }, [cartItems]); // This will trigger whenever the cartItems array changes

    const handleClear = () =>
    {
        clearCart();
        setTimeLeft(120); // Reset timer when cart is cleared
    };

    const openModal = () =>
    {
        setModal(true);
        setIsModalOpen(true);
    };

    const closeModal = () =>
    {
        setModal(false);
        setIsModalOpen(false);
        setTimeLeft(120); // Reset timer when modal closes
    };

    const handlePayment = () => 
    {
        setSecondModal(true);
    };

    return (
        <>
            {/* Timer component, passing the timeLeft and reset function */}
            {/* <Timer timeLeft={timeLeft} resetTime={setTimeLeft} /> */}
            <button onClick={handleClear}>전체 삭제</button>
            <h3>선택한 상품: {cartItems.length} 개</h3>
            <ShoppingCart isModalOpen={isModalOpen} />
            <br></br>
            <button onClick={openModal}>{totalPrice()}원 <br></br>결제하기</button>

            {/* Modal configuration */}
            <Modal isOpen={modal} ariaHideApp={false} onRequestClose={closeModal}>
                {/* Triggering closeModal function on request close */}
                <h1>주문 내역을 다시 한 번 확인해주세요.</h1>
                <button onClick={closeModal}>X</button>
                <ShoppingCart isModalOpen={isModalOpen} />
                <h2>※매장 이용 시 일회용 컵 사용 불가※</h2>
                <h3>
                    총 수량: {cartItems.length} 개
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    총 결제금액: {totalPrice()} 원
                </h3>
                <button onClick={closeModal}>←<br/>돌아가기</button>
                <button onClick={handlePayment}>먹고가기<br/>다회용 컵</button>
                <button onClick={handlePayment}>포장하기<br/>일회용 컵</button>
                <Modal isOpen = {secondModal} ariaHideApp = {false}>
                    <PaymentComponent/>
                </Modal>
            </Modal>
        </>
    );
};

export default Footer;

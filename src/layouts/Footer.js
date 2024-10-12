import ShoppingCart from "../store/ShoppingList";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { language, useCartStore } from "../store/store";
import Timer from "./Timer";
import PaymentComponent from "../pages/Payment/Payment";

const Footer = () =>
{
    const [timeLeft, setTimeLeft] = useState(120);

    const { clearCart, cartItems, totalPrice } = useCartStore(); // Access cartItems from Zustand store

    const [modal, setModal] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [secondModal, setSecondModal] = useState(false);

    const { lang } = language();

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
            <button onClick={handleClear}>{lang ? "전체 삭제" : "Clear all"}</button>
            <h3>{lang ? "선택한 상품: " : null}{cartItems.length} {lang ? "개" : "kind(s) of product"}</h3>
            <ShoppingCart isModalOpen={isModalOpen} />
            <br></br>
            <button onClick={openModal}>{totalPrice()}{lang ? "원" : " Won"} <br></br>{lang ? "결제하기" : "Payment"}</button>

            {/* Modal configuration */}
            <Modal isOpen={modal} ariaHideApp={false} onRequestClose={closeModal}>
                {/* Triggering closeModal function on request close */}
                <h1>{lang ? "주문 내역을 다시 한 번 확인해주세요." : "Check out your order list."}</h1>
                <button onClick={closeModal}>X</button>
                <ShoppingCart isModalOpen={isModalOpen} />
                <h2>{lang ? "※매장 이용 시 일회용 컵 사용 불가※" : "※You CANNOT use disposable cup in our cafe.※"}</h2>
                <h3>
                    {lang ? "총 수량:" : "Q'ty:"} {cartItems.length} {lang ? "개" : "pcs"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {lang ? "총 결제금액:" : "Total:"} {totalPrice()} {lang ? "원" : " Won"}
                </h3>
                <button onClick={closeModal}>←<br/>{lang ? "뒤로가기" : "Back"}</button>
                <button onClick={handlePayment}>{lang ? "먹고가기" : "For here"}<br/>{lang ? "다회용 컵" : "Reuseable cup"}</button>
                <button onClick={handlePayment}>{lang ? "포장하기" : "To go"}<br/>{lang ? "일회용 컵" : "Disposable cup"}</button>
                <Modal isOpen = {secondModal} ariaHideApp = {false}>
                    <PaymentComponent/>
                </Modal>
            </Modal>
        </>
    );
};

export default Footer;

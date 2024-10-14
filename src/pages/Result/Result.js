/**
 * Result.js
 * PurchaseMenu.js에서 클릭한 정보를 받아 실제로 결제하는 것처럼 보이게 구현하기
 * 영수증, 주문번호 출력 후 IdlePage로 이동
 */

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { language } from "../../store/store";
import "./Result.css";

const Result = () =>
{
    const { lang } = language();

    const [firstModal, setFirstModal] = useState(true);

    const [timeLeft, setTimeLeft] = useState(9);

    const [orderNumber, setOrderNumber] = useState(null);

    const navigate = useNavigate();

    //const [receipt, setReceipt] = useState(false);

    

    useEffect(() => 
    {
        setOrderNumber(Math.floor(Math.random() * 100) + 1);
    }, []);

    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000);

        if(timeLeft === 0)
        {
            setFirstModal(false);
        }

        if(timeLeft === -5)
        {
            navigate("/idle");
        }
        return () => clearInterval(timer);
    }, [timeLeft, navigate]);

    const onClickHandlerYes = () =>
    {
        setTimeLeft(0);
        setFirstModal(false);
    };

    const onClickHandlerNo = () =>
    {
        setTimeLeft(0);
        setFirstModal(false);
    };

    return (
        <>
            <div className='result_popup'>
                <Modal isOpen = {firstModal} ariaHideApp={false} className = {"modal"}>
                    <h3>
                        {lang ? "[정상승인]" : "[Approved payment]"} <br></br>
                        {lang ? "영수증을 출력하시겠습니까?" : "Do you want to print out the receipt?"} <br></br>
                        {timeLeft}
                    </h3>
                    <div>
                        <button className = "modal_button" onClick={onClickHandlerYes}>{lang ? "출력" : "Print"}</button>
                        <button className = "modal_button" onClick={onClickHandlerNo}>{lang ? "미출력" : "Skip"}</button>
                    </div>
                </Modal>
            </div>
            <div className="receipt">
                <h1>{lang ? "주문완료" : "Your order has been placed."}</h1>
                <h4>{lang ? "결제가 정상적으로 처리되었습니다." : "Your payment was successful."}</h4>
                <h3>
                    {lang ? "출력되는 영수증에서 주문번호를 확인해주세요." 
                    : "Please check your order number on the printed receipt."}
                </h3>
                <h2>{lang ? "주문번호" : "Order No."}</h2>
                <h1 className="order_number">{lang ? null : "No. "}{orderNumber}{lang ? "번" : null}</h1>
                <h5>{lang ? "주문하신 메뉴를 정성껏 준비중입니다." : "We are carefully preparing the menu you ordered."}</h5>
            </div>
        </>
    )
};
export default Result;
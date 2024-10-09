/**
 * Result.js
 * PurchaseMenu.js에서 클릭한 정보를 받아 실제로 결제하는 것처럼 보이게 구현하기
 * 영수증, 주문번호 출력 후 IdlePage로 이동
 */

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { language } from "../../store/store";

const Result = () =>
{
    const { lang } = language();

    const [firstModal, setFirstModal] = useState(true);

    const [secondModal, setSecondModal] = useState(false);

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
            setSecondModal(true);
        }

        if(timeLeft === -5)
        {
            setSecondModal(false);
            navigate("/idle");
        }
        return () => clearInterval(timer);
    }, [timeLeft, navigate]);

    const onClickHandlerYes = () =>
    {
        setTimeLeft(0);
        setFirstModal(false);
        setSecondModal(true);
        //setReceipt(true);
    };

    const onClickHandlerNo = () =>
    {
        setTimeLeft(0);
        setFirstModal(false);
        setSecondModal(true);
    };

    return (
        <>
            <div className="result_popup">
                <Modal isOpen = {firstModal} ariaHideApp={false}>
                    <h3>
                        {lang ? "[정상승인]" : "[Approved payment]"} <br></br>
                        {lang ? "영수증을 출력하시겠습니까?" : "Do you want to print out the receipt?"} <br></br>
                        {timeLeft}
                    </h3>
                    <button onClick={onClickHandlerYes}>{lang ? "출력" : "Print"}</button>
                    <button onClick={onClickHandlerNo}>{lang ? "미출력" : "Skip"}</button>
                </Modal>
            </div>
            <div className="receipt">
                <Modal isOpen = {secondModal} ariaHideApp={false}>
                    <h3>{lang ? "주문번호" : "Ordered No."}</h3>
                    <h1>{orderNumber}</h1>
                    <h3>
                        {lang ? "상품 제조가 완료되어 대기번호가 호출되면 픽업대로 오시기 바랍니다. 감사합니다." 
                        : "Please wait for a moment until we call your number. Thank you."}
                    </h3>
                </Modal>
            </div>
        </>
    )
};
export default Result;
/**
 * Result.js
 * PurchaseMenu.js에서 클릭한 정보를 받아 실제로 결제하는 것처럼 보이게 구현하기
 * 영수증, 주문번호 출력 후 IdlePage로 이동
 */
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const Result = ({ lang, payment }) =>
{
    const [firstModal, setFirstModal] = useState(true);

    const [secondModal, setSecondModal] = useState(false);

    const [receipt, setReceipt] = useState(false);

    const navigate = useNavigate();

    useEffect(() => 
    {
        const intervalid = setInterval(() =>
        {
            setFirstModal(false);
            setSecondModal(true);
        }, 4000);
    
        return () => clearInterval(intervalid);
    }, [firstModal]);

    useEffect(() => 
    {
        const intervalid = setInterval(() =>
        {
            navigate("/idle")
        }, 8000);
        
        return () => clearInterval(intervalid);
    }, [secondModal]);

    const onClickHandlerYes = () =>
    {
        setFirstModal(false);
    };

    const onClickHandlerNo = () =>
    {
        setFirstModal(false);
        setReceipt(true);
    };

    return (
        <>
            <div className="receipt">
                <div className="result_popup">
                    <Modal isOpen = {firstModal} ariaHideApp={false}>
                        <h3>
                            결제 금액: <br></br>
                            결제가 정상적으로 처리되었습니다. <br></br>
                            영수증을 출력하시겠습니까? <br></br>
                            예: 출력 <br></br>
                            아니오: 미출력 <br></br>
                        </h3>
                        <button onClick={onClickHandlerYes}>예</button>
                        <button onClick={onClickHandlerNo}>아니오</button>
                    </Modal>
                </div>
                <Modal isOpen = {secondModal} ariaHideApp={false}>
                    <h1>결제가 완료되었습니다.</h1>
                    <h3>
                        대기번호
                        <h1>{Math.floor(Math.random() * 100) + 1}</h1>
                        {receipt ? "영수증 출력이 완료될 때까지 기다려 주세요." : ""} <br></br>
                        상품 제조가 완료되어 대기번호가 호출되면 픽업대로 오시기 바랍니다. 
                        감사합니다.
                    </h3>
                </Modal>
            </div>
        </>
    )
};
export default Result;
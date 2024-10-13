/*
 * Purchase.js
 * 결제 페이지
 * 포인트 적립 / 사용, 각종 페이, 카드 결제, 기프티콘 및 상품권 결제 버튼 구현
*/

import { useState } from 'react';
import { language, useCartStore } from '../../store/store';
import './Payment.css';
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import { UserPoint } from '../Point/UserPoint';

const PaymentComponent = () =>
{
  const [pointFormVisible, setPointFormVisible] = useState(false); // 포인트 적립/사용 폼 표시 상태
  const [points, setPoints] = useState(0); // 보유 포인트 상태 (숫자로 초기화)
  const [isEarning, setIsEarning] = useState(null); // 포인트 적립/사용 상태
  const { totalPrice } = useCartStore();
  const { lang } = language();
  const [modal, setModal] = useState(false);

  const applyDiscount = () => 
  {
    setModal(true);
  };

  const submitPoints = () => {
    const price = parseFloat(totalPrice);
    if (isNaN(price) || price <= 0) {
      alert('유효한 결제 금액을 입력하세요.');
      return;
    }

    let earnedPoints = 0;
    if (isEarning) {
      earnedPoints = (price * 0.05);
      alert(`${earnedPoints.toFixed(2)} 포인트가 적립되었습니다.`);
      setPoints((prevPoints) => prevPoints + earnedPoints); // 보유 포인트 업데이트
    } else {
      if (points > 0) {
        alert(`${points} 포인트가 사용되었습니다.`);
        // 여기에서 포인트를 사용한 후 포인트 상태를 업데이트할 수 있음
        setPoints((prevPoints) => Math.max(0, prevPoints - points)); // 보유 포인트 감소
      } else {
        alert('유효한 포인트를 입력하세요.');
        return;
      }
    }

    const finalPrice = price - (isEarning ? earnedPoints : 0);
    alert(`최종 결제 금액 : ${finalPrice.toFixed(2)} 원`);

    setPointFormVisible(false);
  };

  const completePayment = (method) =>
  {
    alert(`${method}: 현재 기능 점검중입니다.`);
  }

  return (
    <div className='payment-container'>
      <h2 className='payment-header'>{lang ? "결제수단 선택" : "Payment method"} ({totalPrice()}{lang ? "원" : "Won"})</h2>

      <h3 className='step-1'>STEP1</h3><br/><br/>
      <h3 className='step-title-1'>{lang ? "제휴할인을 선택해주세요." : "Choose the discount for the allience."}</h3>
      <button className='option-box-1' onClick={applyDiscount}></button>
      <button className='option-box-2' onClick={applyDiscount}>   </button>
      
      <h3 className='step-2'>STEP2</h3>
      <h3 className='step-title-2'>{lang ? "결제수단을 선택해주세요." : "Choose the payment method."}</h3>
      <button className='payment-card-samsungpay' onClick={applyDiscount}>   </button>
      <button className='payment-Appcard-QRbarcode' onClick={applyDiscount}>   </button>

      <div>
        <button className='payment-box-kakaopay' onClick={() => completePayment('카카오페이')}>   </button>
        <button className='payment-box-payco' onClick={() => completePayment('페이코')}>   </button>
        <button className='payment-box-naverpay' onClick={() => completePayment('네이버페이')}>   </button>
        <button className='payment-box-zeropay' onClick={() => completePayment('제로페이')}>   </button>
        <button className='payment-box-BCpaybook' onClick={() => completePayment('BC페이북')}>   </button>
        <button className='payment-box-HANApay' onClick={() => completePayment('하나 Pay')}>   </button>
        <button className='payment-box-KBpay' onClick={() => completePayment('KB Pay')}>   </button>
      </div>
      
      <div>
        <button className='payment-box-coupon' onClick={() => completePayment('쿠폰')}>   </button>
        <button className='payment-box-MEGApay' onClick={() => completePayment('메가선불페이')}>  </button>
      </div>

      <h3 className='totalmoney'>{lang ? "주문금액: " : "Price: "}{totalPrice().toLocaleString()}{lang ? "원 - 할인금액: " : " Won - Discount: "}0{lang ? "원 = 결제금액: " : " Won = Total: "}{totalPrice().toLocaleString()}{lang ? "원" : " Won"}</h3>
      <Modal isOpen = {modal} ariaHideApp = {false}>
        <UserPoint/>
      </Modal>
      {pointFormVisible && (
        <div>
          <input
            type="radio"
            name="point-action"
            onChange={() => {
              setIsEarning(true);
              // 포인트 적립 시 자동으로 적립
              const price = parseFloat(totalPrice);
              if (!isNaN(price) && price > 0) {
                const earnedPoints = (price * 0.05);
                alert(`${earnedPoints.toFixed(0)} 포인트가 적립되었습니다.`);
                setPoints((prevPoints) => prevPoints + earnedPoints); // 보유 포인트 업데이트
              }
            }}
            checked={isEarning === true}
          /> 적립
          {/* <input
            type="radio"
            name="point-action"
            onChange={() => {
              setIsEarning(false);
              setPoints(0); // 포인트 사용 선택 시 포인트 입력 초기화
            }}
            checked={isEarning === false}
          /> 사용
          <input
            type="number" // 포인트 입력 필드 타입을 숫자로 변경
            value={points}
            onChange={(e) => setPoints(Number(e.target.value) || 0)} // 숫자로 변환하여 상태 업데이트
            placeholder="포인트 입력"
            disabled={isEarning === true} // 적립 선택 시 입력 비활성화
          />
          <button onClick={submitPoints}>확인</button> */}
        </div>
      )}

    </div>
  );
};

export default PaymentComponent;
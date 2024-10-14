import { useState } from 'react';
import { useCartStore } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
import './PaymentModal.css';
import '../Coupon/Coupon';
import '../Point/UserPoint';

import Modal from './PaymentModal';

const PaymentComponent = () =>
{
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectMethod, setSelectMethod] = useState('');
  const { totalPrice } = useCartStore();
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice());
  const [countdown, setCountdown] = useState(10);

  const applyDiscount = () => {
    const price = parseFloat(totalPrice());
    if (isNaN(price)) {
      alert('유효한 결제 금액을 입력하세요.');
      return;
    }
    const discount = price * 0.05;
    const newPrice = price - discount;
    setDiscountedPrice(newPrice);
    alert(`선택하신 할인 방법으로 할인이 되었습니다. 새로운 결제 금액: ${newPrice.toFixed(2)} 원`);
  }


  const nextPointUse = () => {
    navigate('/menu/UserPoint'); // 포인트 버튼 누르면 UserPoint 페이지 나타남
  }

  const couponPage = () => {
    navigate('/menu/Coupon');  // 쿠폰 버튼 누르면 Coupon 페이지 나타남
  }

  const paymentCard = () => {
    navigate('/menu/point');
  }

  const completePayment = (method) =>
  {
    setSelectMethod(method);  // 선택한 결제 수단 저장
    setModalVisible(true);  // 모달 표시
    setCountdown(10);

    // 카운트다운 로직
    const interValId = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interValId) // 카운트 다운이 끝나면 인터벌 해제
          navigate('/'); // 메인화면으로 이동
          return 0;  // 카운트다운을 0으로 설정
        }
        return prev - 1; // 1초마다 카운트다운 감소
      });
    }, 1000); // 1000 = 1초
  }

  const closeModal = () => {
    setModalVisible(false);
    setSelectMethod('');
  }

  return (
    <div className='payment-container'>
      <h2 className='payment-header'>결제수단 선택 ({totalPrice()}원)</h2>

      <h3 className='step-1'>STEP1</h3><br/><br/>
      <h3 className='step-title-1'>제휴할인/포인트를 선택해주세요.</h3>
      <button className='option-box-1' onClick={applyDiscount}></button>
      <button className='option-box-2' onClick={applyDiscount}>   </button>
      <button className='pointuse' onClick={nextPointUse}>POINT</button>
      
      <h3 className='step-2'>STEP2</h3>
      <h3 className='step-title-2'>결제수단을 선택해주세요.</h3>
      <button className='payment-card-samsungpay' onClick={() => completePayment('삼성페이/카드')}>   </button>
      <button className='payment-Appcard-QRbarcode' onClick={() => completePayment('앱카드/QR코드')}>   </button>
      <button className='payment-card' onClick={paymentCard}>   </button>

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
        <button className='payment-box-coupon' onClick={couponPage}>   </button>
        <button className='payment-box-MEGApay' onClick={() => completePayment('메가선불페이')}>  </button>
      </div>


      <h3 className='totalmoney'>
        주문금액: {totalPrice()}원 - 할인금액: {totalPrice() - discountedPrice}원 결제금액: {discountedPrice.toFixed(0)}원
      </h3>

      <Modal
        isVisible={modalVisible}
        onClose={closeModal}
        title={`${selectMethod} 결제`} // 제목에 선택한 결제 수단 표시
      >
        <p>QR코드/바코드를 카드 리더기에 터치해주세요.</p>
      </Modal>
      <Modal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="결제 완료"
      >
        <p>{selectMethod}(으)로 결제가 완료되었습니다.</p>
        <p>잠시 후 메인 화면으로 돌아갑니다.({countdown}초)</p>
      </Modal>

    </div>
  );
};

export default PaymentComponent;
/*
 * Purchase.js
 * 결제 페이지
 * 포인트 적립 / 사용, 각종 페이, 카드 결제, 기프티콘 및 상품권 결제 버튼 구현
*/



import { useState } from 'react';

const Purchase = () => {
  const [currentComponent, setCurrentComponent] = useState('Main');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Main':
        return <MainComponent setCurrentComponent={setCurrentComponent} />;
      case 'Payment':
        return <PaymentComponent setCurrentComponent={setCurrentComponent} />;
      default:
        return <MainComponent setCurrentComponent={setCurrentComponent} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

const MainComponent = ({ setCurrentComponent }) => {
  return (
    <div>
      <button onClick={() => setCurrentComponent('Payment')}>매장</button>
      <button onClick={() => setCurrentComponent('Payment')}>포장</button>
    </div>
  );
};

const PaymentComponent = ({ setCurrentComponent }) => {
  const [totalPrice, setTotalPrice] = useState(''); // 결제 금액 상태
  const [pointFormVisible, setPointFormVisible] = useState(false); // 포인트 적립/사용 폼 표시 상태
  const [points, setPoints] = useState(0); // 보유 포인트 상태 (숫자로 초기화)
  const [isEarning, setIsEarning] = useState(null); // 포인트 적립/사용 상태
  const [giftCardCode, setGiftCardCode] = useState('');

  const handlePriceChange = (e) => {
    setTotalPrice(e.target.value);
  };

  const applyDiscount = () => {
    const price = parseFloat(totalPrice);
    if (isNaN(price)) {
      alert('유효한 결제 금액을 입력하세요.');
      return;
    }
    const discount = price * 0.05;
    const newPrice = price - discount;
    setTotalPrice(newPrice.toFixed(2));
    alert(`5% 할인 적용! 새로운 결제 금액: ${newPrice.toFixed(2)} 원`);
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

  const applyGiftCard = () => {
    if (giftCardCode === "suasua"){ // 임의로 넣은 기프티콘(상픔권) 코드
      const discountAmount = 10000; // 기프티콘 잔액 : 10,000원
      const newTotalPrice = Math.max(0, parseFloat(totalPrice - discountAmount));
      setTotalPrice(newTotalPrice.toFixed(0));
      alert(`기프티콘 사용이 완료되었습니다. 결제 금액이 ${discountAmount} 원 차감되었습니다.`)
    } else {
      alert('유효하지 않은 기프티콘/상품권 코드입니다.'); // suasua 가 아닌 다른 값을 입력할 때 나오는 메세지
    }
    setGiftCardCode('');
  }

  const completePayment = (method) => {
    alert(`${method}로 결제가 완료되었습니다. 확인을 누르시면 2초 뒤 첫화면으로 돌아갑니다.`);
    setTimeout(() => {
      setTotalPrice('');
      setPoints(0);
      setIsEarning(null);
      setCurrentComponent('Main');
    },2000); // 2초 뒤 메인 화면으로 돌아가기 
  }

  return (
    <div>
      <button onClick={() => setCurrentComponent('Main')}>뒤로 가기</button>
      <h2>결제 페이지</h2>

      <input
        type="number"
        value={totalPrice}
        onChange={handlePriceChange}
        placeholder="결제 금액 입력"
      />
      
      <button onClick={() => setPointFormVisible(true)}>포인트 적립/사용</button>
      <button onClick={applyDiscount}>할인</button>

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
          <input
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
          <button onClick={submitPoints}>확인</button>
        </div>
      )}

      <h3>결제 금액: {totalPrice ? `${parseFloat(totalPrice).toFixed(2)} 원` : '0 원'}</h3>
      <h3>보유 포인트 : {points.toFixed(0)} 포인트</h3> {/* 보유 포인트 표시 */}
      
      <div>
        <input
          type="text"
          value={giftCardCode}
          onChange={(e) => setGiftCardCode(e.target.value)}
          placeholder="기프티콘/상품권 코드 입력"
        />
        <button onClick={applyGiftCard}>적용</button>
      </div>
      <div>
        <button onClick={() => completePayment('네이버페이')}>네이버페이</button>
        <button onClick={() => completePayment('카카오페이')}>카카오페이</button>
        <button onClick={() => completePayment('카드')}>카드</button>
        <button onClick={() => completePayment('페이코')}>페이코</button>
      </div>
    </div>
  );
};

export default Purchase;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserPoint.css';

export const UserPoint = ({ finalTotalPrice, setFinalTotalPrice }) => {
  const [phoneInput, setPhoneInput] = useState("");
  const [message, setMessage] = useState("");
  const [customers, setCustomers] = useState([]);
  const [price, setPrice] = useState(finalTotalPrice); // 초기 가격을 finalTotalPrice로 설정
  const [remainingPrice, setRemainingPrice] = useState(finalTotalPrice); // 남은 가격 상태 추가

  const navigate = useNavigate();

  // 고객 데이터를 서버에서 가져옴
  useEffect(() => {
    fetch('http://localhost:3001/customers') // Express 서버에서 데이터를 가져옴
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error('Error fetching customer data:', error));
  }, []);

  // price를 finalTotalPrice로 업데이트
  useEffect(() => {
    console.log("final  : " + finalTotalPrice);
    setPrice(finalTotalPrice);
    setRemainingPrice(finalTotalPrice); // 남은 가격 초기화
  }, [finalTotalPrice]); // finalTotalPrice가 변경될 때마다 price 업데이트

  // 포인트 사용 처리 함수
  const handlePointsUsage = (customer) => {
    const pointsToUse = Math.min(customer.points, price); // 고객이 가진 포인트와 가격 중 적은 값을 사용

    const updatedPoints = customer.points - pointsToUse; // 차감 후 남은 포인트
    const newTotalPrice = finalTotalPrice - pointsToUse; // 포인트 사용 후 새로운 가격

    // 서버에 포인트 업데이트 요청 (PATCH)
    fetch(`http://localhost:3001/customers/${customer.phone}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ points: updatedPoints }),
    })
      .then((response) => response.json())
      .then((updatedCustomer) => {
        // 포인트 사용 후 남은 가격을 계산
        const remainingPrice = newTotalPrice > 0 ? newTotalPrice : 0;

        // 사용자에게 알림
        alert(`${updatedCustomer.name}님, 포인트가 사용되었습니다! 남은 포인트: ${updatedCustomer.points}. 결제할 금액: ${remainingPrice}원`);
        
        // 남은 가격으로 업데이트
        setRemainingPrice(remainingPrice);
        setFinalTotalPrice(remainingPrice); // 새로운 가격으로 업데이트
        navigate("/card");
      })
      .catch((error) => console.error('Error updating customer points:', error));
  };

  // 포인트 사용 버튼 클릭 시 처리
  const pointUse = () => {
    if (phoneInput.length >= 10) {
      const foundCustomer = customers.find((customer) => customer.phone === phoneInput);
      if (foundCustomer) {
        handlePointsUsage(foundCustomer); // 포인트 사용 함수 호출
      } else {
        setMessage("해당 번호로 등록된 고객을 찾을 수 없습니다.");
      }
    } else {
      setMessage("정확한 전화번호를 입력하세요.");
    }
  };

  return (
    <div className="user-point-container">
      <h2 className="user-point-title">포인트를 사용하시겠습니까?</h2>
      <h3 className="user-point-price">현재 가격: {price}원</h3>
      <div className="user-point-input-section">
        <input
          value={phoneInput}
          placeholder='전화번호 입력'
          readOnly
          className="user-point-input"
        />
        <div className="user-point-button-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "*"].map((num) => (
            <button key={num} className="user-point-number-button" onClick={() => setPhoneInput(phoneInput + num)}>
              {num}
            </button>
          ))}
          <button className="user-point-delete-button" onClick={() => setPhoneInput(phoneInput.slice(0, -1))}>
            삭제
          </button>
        </div>
        <div className="user-point-actions">
          <button className="user-point-use-button" onClick={pointUse}>포인트 사용</button>
        </div>
      </div>
      <br />
      <button className="user-point-no-point-button" onClick={() => navigate("/result")}>포인트 없이 결제하기</button>
      {message && <p className="user-point-message">{message}</p>}
    </div>
  );
};
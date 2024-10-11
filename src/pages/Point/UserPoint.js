import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserPoint.css';
import { usePriceStore } from '../../store/store';

export const UserPoint = () => {
  const [phoneInput, setPhoneInput] = useState("");
  const [message, setMessage] = useState("");
  const [customers, setCustomers] = useState([]);
  const finalTotalPrice = usePriceStore((state) => state.finaltotalPrice); 
  const { subtractFromTotalPrice } = usePriceStore(); 
  const [remainingPrice, setRemainingPrice] = useState(finalTotalPrice);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/customers') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched customers data: ", data); // 데이터 확인
        setCustomers(data);
      })
      .catch((error) => console.error('Error fetching customer data:', error));
  }, []);

  useEffect(() => {
    console.log("finalTotalPrice: " + finalTotalPrice);
    setRemainingPrice(finalTotalPrice);
  }, [finalTotalPrice]);

  const pointUse = () => {
    if (phoneInput.length >= 10) {
      const foundCustomer = customers.find((customer) => customer.phone.trim() === phoneInput.trim());
      if (foundCustomer) {
        handlePointsUsage(foundCustomer);
      } else {
        setMessage("해당 번호로 등록된 고객을 찾을 수 없습니다.");
      }
    } else {
      setMessage("정확한 전화번호를 입력하세요.");
    }
  };

  const handlePointsUsage = (customer) => {
    const pointsToUse = Math.min(customer.points, remainingPrice);
    const updatedPoints = customer.points - pointsToUse;
    const newTotalPrice = remainingPrice - pointsToUse;

    fetch(`http://localhost:3001/customers/${customer.phone}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ points: updatedPoints }),
    })
      .then((response) => response.json())
      .then((updatedCustomer) => {
        const updatedRemainingPrice = newTotalPrice > 0 ? newTotalPrice : 0;

        // 상태 업데이트
        subtractFromTotalPrice(pointsToUse);
        setRemainingPrice(updatedRemainingPrice); // 남은 가격 업데이트

        // 고객 리스트에서 업데이트된 고객 정보 업데이트
        setCustomers((prevCustomers) => 
          prevCustomers.map((cust) => 
            cust.phone === customer.phone ? updatedCustomer : cust
          )
        );

        alert(`${updatedCustomer.name}님, 포인트가 사용되었습니다! 남은 포인트: ${updatedCustomer.points}. 결제할 금액: ${updatedRemainingPrice}원`);

        // 페이지 전환
        navigate("/card");
      })
      .catch((error) => console.error('Error updating customer points:', error));
  };

  return (
    <div className="user-point-container">
      <h2 className="user-point-title">포인트를 사용하시겠습니까?</h2>
      <h3 className="user-point-price">현재 가격: {remainingPrice}원</h3> 
      <div className="user-point-input-section">
        <input
          value={phoneInput}
          placeholder='전화번호 입력'
          className="user-point-input"
          onChange={(e) => setPhoneInput(e.target.value)}
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
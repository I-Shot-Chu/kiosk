import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Point.css';
import { usePriceStore } from '../../store/store';

export const Point = () => {
  const [isOk, setIsOk] = useState(false);
  const [phoneInput, setPhoneInput] = useState("");
  const [message, setMessage] = useState("");
  const [customers, setCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState(null); // 현재 고객 상태 추가

  // Zustand로부터 totalPrice를 불러옴
  const finalTotalPrice = usePriceStore((state) => state.finaltotalPrice);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/customers')  // Express 서버에서 데이터를 가져옴
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error('Error fetching customer data:', error));
  }, []);

  const pointAccrual = (customer) => {
    const pointsToAccrue = Math.floor(finalTotalPrice * 0.1); // 포인트의 10% 계산
    const updatedPoints = customer.points + pointsToAccrue; // 현재 포인트에 추가

    fetch(`http://localhost:3001/customers/${customer.phone}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ points: updatedPoints }),
    })
      .then((response) => response.json())
      .then((updatedCustomer) => {
        alert(`${updatedCustomer.name}님, ${pointsToAccrue}포인트가 적립되었습니다! 현재 포인트: ${updatedCustomer.points}`);
        setCustomers((prevCustomers) =>
          prevCustomers.map((cust) =>
            cust.phone === updatedCustomer.phone ? updatedCustomer : cust
          )
        );
        setCurrentCustomer(updatedCustomer);  // 현재 고객 상태 업데이트
        navigate("/purchase");
      })
      .catch((error) => console.error('Error updating customer points:', error));
  };

  const pointPlus = () => {
    if (phoneInput.length >= 10) {
      const foundCustomer = customers.find((customer) => customer.phone === phoneInput);
      if (foundCustomer) {
        pointAccrual(foundCustomer);
      } else {
        setMessage("해당 번호로 등록된 고객을 찾을 수 없습니다.");
      }
    } else {
      setMessage("정확한 전화번호를 입력하세요.");
    }
  };

  return (
    <div className="user-point-container">
      {!isOk ? (
        <div>
          <h2 className="user-point-title">포인트 적립하시겠습니까?</h2>
          <div className="action-buttons">
            <button onClick={() => setIsOk(true)} className="user-point-use-button">네</button>
            <button onClick={() => navigate("/result")} className="user-point-no-point-button">아니오</button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="user-point-title">전화번호를 입력하세요!</h2>
          <div className="user-point-input-section">
            <input 
              className="user-point-input" 
              value={phoneInput} 
              placeholder='번호 입력' 
              readOnly 
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
              <button className="user-point-use-button" onClick={pointPlus}>포인트 적립</button>
              <button className="user-point-no-point-button" onClick={() => navigate("/result")}>넘어가기</button>
            </div>
          </div>

          {/* 현재 고객의 포인트 표시 */}
          {currentCustomer && (
            <div className="user-point-summary">
              <h3>{currentCustomer.name}님의 남은 포인트: {currentCustomer.points}</h3>
            </div>
          )}
        </div>
      )}
      {message && <p className="user-point-message">{message}</p>}
    </div>
  );
};
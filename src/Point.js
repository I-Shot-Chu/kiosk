import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Point.css';  // CSS 파일 임포트

export const Point = () => {
  const [isok, setIsok] = useState(false);
  const [phoneInput, setPhoneInput] = useState("");
  const [message, setMessage] = useState("");
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/customers')  // Express 서버에서 데이터를 가져옴
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error('Error fetching customer data:', error));
  }, []);

  const pointAccrual = (customer) => {
    const updatedPoints = customer.points + 10; // 포인트 10 적립

    fetch(`http://localhost:3001/customers/${customer.phone}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ points: updatedPoints }),
    })
      .then((response) => response.json())
      .then((updatedCustomer) => {
        alert(`${updatedCustomer.name}님, 포인트가 적립되었습니다! 현재 포인트: ${updatedCustomer.points}`);
        setCustomers((prevCustomers) =>
          prevCustomers.map((cust) =>
            cust.phone === updatedCustomer.phone ? updatedCustomer : cust
          )
        );
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
    <div className="kiosk-container">
      {!isok ? (
                <div>
                <h2>포인트 적립하시겠습니까?</h2>
                <div className="action-buttons">
                  <button onClick={() => setIsok(true)} className="point-btn">네</button>
                  <button onClick={() => navigate("/result")} className="no-point-btn">아니오</button>
                </div>
              </div>
      ) : (
        <div>
          <h2>전화번호를 입력하세요</h2>
          <div>
            <input className="phone-input" value={phoneInput} placeholder='번호 입력' readOnly />
            <div className="keypad">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0,"*"].map((num) => (
                <button key={num} className="keypad-btn" onClick={() => setPhoneInput(phoneInput + num)}>
                  {num}
                </button>
              ))}
              <button className="delete-btn" onClick={() => setPhoneInput(phoneInput.slice(0, -1))}style={{backgroundColor :"orange"}}>삭제</button>
            </div>
            <div className="action-buttons">
              <button className="point-btn" onClick={pointPlus}>포인트 적립</button>
              <button className="no-point-btn" onClick={() => navigate("/result")}>적립없이 결제하기</button>
            </div>
          </div>
          <br />
        </div>
      )}
      {message && <h2>{message}</h2>}
    </div>
  );
};
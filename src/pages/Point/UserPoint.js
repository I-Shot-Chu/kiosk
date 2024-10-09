import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserPoint = () => {
  const [phoneInput, setPhoneInput] = useState("");
  const [message, setMessage] = useState("");
  const [customers, setCustomers] = useState([]);
  const [price,setPrice] = useState(100); // 초기 가격 (예시)

  const navigate = useNavigate();

  // 고객 데이터를 서버에서 가져옴
  useEffect(() => {
    fetch('http://localhost:3001/customers') // Express 서버에서 데이터를 가져옴
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error('Error fetching customer data:', error));
  }, []);

  // 포인트 사용 처리 함수
  const handlePointsUsage = (customer) => {
    if (customer.points >= price) {
      const updatedPoints = customer.points - price; // 가격만큼 포인트 차감

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
          alert(`${updatedCustomer.name}님, 포인트가 사용되었습니다! 남은 포인트: ${updatedCustomer.points}`);
          navigate("/result");
        })
        .catch((error) => console.error('Error updating customer points:', error));
    } else {
      setMessage("포인트가 부족합니다.");
    }
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
    <div>
      <h2>포인트를 사용하시겠습니까?</h2>
      <h3>현재 가격: {price}원</h3>
      <div>
        <input value={phoneInput} placeholder='전화번호 입력' readOnly />
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => setPhoneInput(phoneInput + num)}>
              {num}
            </button>
          ))}
        </div>
        <div>
          <button onClick={() => setPhoneInput(phoneInput.slice(0, -1))}>삭제</button>
          <button onClick={pointUse}>포인트 사용</button>
        </div>
      </div>
      <br />
      <button onClick={() => navigate("/result")}>포인트 없이 결제하기</button>
      {message && <p>{message}</p>}
    </div>
  );
};
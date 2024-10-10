import { useEffect, useState } from "react";
import { detailCupon } from "./api/api";
import { useNavigate } from "react-router-dom";
import "./Cupon.css"; // 스타일을 외부 파일로 분리

export const Cupon = ({ finalTotalPrice }) => {
  const [cupon, setCupon] = useState(null); // 쿠폰 정보를 저장
  const [cuponCode, setCuponCode] = useState(""); // 입력된 쿠폰 코드 저장
  const [remainingAmount, setRemainingAmount] = useState(finalTotalPrice); // 남은 결제 금액 저장

  useEffect(() => {
    if (cuponCode) {
      const fetchedCupon = detailCupon(cuponCode); 
      setCupon(fetchedCupon);

      if (fetchedCupon) {
        // 쿠폰 금액을 차감한 나머지 결제 금액 계산
        const remaining = finalTotalPrice - fetchedCupon.price;
        setRemainingAmount(remaining > 0 ? remaining : 0);
      }
    }
  }, [cuponCode, finalTotalPrice]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCuponCode(e.target.value);
  };

  const useCupon = () => {
    navigate("/result");
  };

  const back = () => {
    navigate("/purchase");
  };

  return (
    <div className="cupon-container">
      <h2 className="cupon-title">쿠폰 번호:</h2>
      <input 
        className="cupon-input" 
        placeholder="번호 입력" 
        value={cuponCode} 
        onChange={handleInputChange} 
      />
      
      {cupon ? (
        <div className="cupon-info">
          <h3 className="cupon-name">쿠폰 명칭: {cupon.name}</h3>
          <h3 className="price">쿠폰 가격: \{cupon.price}</h3>
          <h3 className="total">
            결제할 금액: \{remainingAmount}
          </h3>
          <h3 className="remaining">
            잔여 쿠폰 금액: \{cupon.price > finalTotalPrice ? cupon.price - finalTotalPrice : 0}
          </h3>
        </div>
      ) : (
        <h2 className="invalid-cupon">유효한 쿠폰 번호를 입력해주세요.</h2>
      )}
      
      <div className="cupon-buttons">
        <button className="cupon-use-button" onClick={useCupon}>사용</button>
        <button className="cupon-back-button" onClick={back}>돌아가기</button>
      </div>
    </div>
  );
};
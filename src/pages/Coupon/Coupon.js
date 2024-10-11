import { useEffect, useState } from "react";
import { detailCoupon } from "../../Api/api";
import { useNavigate } from "react-router-dom";
import { usePriceStore } from "../../store/store"; // Zustand 스토어 임포트
import "./Cupon.css"; // 스타일을 외부 파일로 분리

export const Cupon = () => {
  const [cupon, setCupon] = useState(null); // 쿠폰 정보를 저장
  const [cuponCode, setCuponCode] = useState(""); // 입력된 쿠폰 코드 저장
  const { totalPrice, setTotalPrice } = usePriceStore(); // Zustand 스토어에서 totalPrice와 setTotalPrice 가져오기
  const [remainingAmount, setRemainingAmount] = useState(totalPrice); // 남은 결제 금액 저장

  const navigate = useNavigate();

  // 쿠폰 코드가 변경될 때마다 해당 쿠폰을 가져오는 로직
  useEffect(() => {
    const fetchCupon = async () => {
      if (cuponCode) {
        try {
          const fetchedCupon = await detailCoupon(cuponCode); // 쿠폰 정보 비동기 처리
          setCupon(fetchedCupon);

          if (fetchedCupon) {
            // 쿠폰 금액을 차감한 나머지 결제 금액 계산
            const remaining = totalPrice - fetchedCupon.price;
            setRemainingAmount(remaining > 0 ? remaining : 0);
          } else {
            setRemainingAmount(totalPrice); // 쿠폰이 없으면 totalPrice 그대로
          }
        } catch (error) {
          console.error('Error fetching coupon:', error);
        }
      }
    };
    
    fetchCupon();
  }, [cuponCode, totalPrice]);

  const handleInputChange = (e) => {
    setCuponCode(e.target.value);
  };

  const useCupon = () => {
    if (cupon) {
      // 쿠폰을 사용하고 totalPrice 업데이트
      setTotalPrice(remainingAmount);
      alert(`쿠폰이 적용되었습니다! 남은 결제 금액: ${remainingAmount}`);
    } else {
      alert("유효한 쿠폰을 입력해주세요.");
    }
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
          <h3 className="price">쿠폰 가격: {cupon.price}</h3>
          <h3 className="total">
            결제할 금액: {remainingAmount}
          </h3>
          <h3 className="remaining">
            잔여 쿠폰 금액: {cupon.price > totalPrice ? cupon.price - totalPrice : 0}
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
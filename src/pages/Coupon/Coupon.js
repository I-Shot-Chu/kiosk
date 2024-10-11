import { useEffect, useState } from "react";
import { detailCoupon } from "../../server/api"; // 쿠폰 정보를 가져오는 API
import { useNavigate } from "react-router-dom";
import { usePriceStore } from "../../store/store"; // Zustand 스토어 임포트
import "./Coupon.css"; // 스타일을 외부 파일로 분리

export const Coupon = () => {
  const [coupon, setCoupon] = useState(null); // 쿠폰 정보를 저장
  const [couponCode, setCouponCode] = useState(""); // 입력된 쿠폰 코드 저장
  const { totalPrice, setTotalPrice } = usePriceStore(); // Zustand 스토어에서 totalPrice와 setTotalPrice 가져오기
  const [remainingAmount, setRemainingAmount] = useState(totalPrice); // 남은 결제 금액 저장

  const navigate = useNavigate();

  // 쿠폰 코드가 변경될 때마다 해당 쿠폰을 가져오는 로직
  useEffect(() => {
    const fetchCoupon = async () => {
      if (couponCode.trim()) { // 입력값이 비어있지 않은지 확인
        try {
          const fetchedCoupon = await detailCoupon(couponCode.trim()); // 쿠폰 정보 비동기 처리
          setCoupon(fetchedCoupon);

          if (fetchedCoupon) {
            // 쿠폰 금액을 차감한 나머지 결제 금액 계산
            const remaining = totalPrice - fetchedCoupon.price;
            setRemainingAmount(remaining > 0 ? remaining : 0);
          } else {
            setRemainingAmount(totalPrice); // 쿠폰이 없으면 totalPrice 그대로
          }
        } catch (error) {
          console.error('Error fetching coupon:', error);
          alert("쿠폰을 가져오는 중 오류가 발생했습니다."); // 오류 메시지 추가
        }
      } else {
        setCoupon(null); // 입력이 비어있을 경우 쿠폰 정보 초기화
        setRemainingAmount(totalPrice); // 남은 금액 초기화
      }
    };

    fetchCoupon();
  }, [couponCode, totalPrice]);

  const handleInputChange = (e) => {
    setCouponCode(e.target.value);
  };

  const useCoupon = () => {
    if (coupon) {
      // 쿠폰을 사용하고 totalPrice 업데이트
      setTotalPrice(remainingAmount);
      alert(`쿠폰이 적용되었습니다! 남은 결제 금액: ${remainingAmount}`);
      navigate("/result"); // 사용 후 결과 페이지로 이동
    } else {
      alert("유효한 쿠폰을 입력해주세요."); // 유효하지 않은 쿠폰 메시지
    }
  };

  const back = () => {
    navigate("/purchase"); // 이전 페이지로 이동
  };

  return (
    <div className="coupon-container">
      <h2 className="coupon-title">쿠폰 번호:</h2>
      <input 
        className="coupon-input" 
        placeholder="번호 입력" 
        value={couponCode} 
        onChange={handleInputChange} 
      />
      
      {coupon ? (
        <div className="coupon-info">
          <h3 className="coupon-name">쿠폰 명칭: {coupon.name}</h3>
          <h3 className="price">쿠폰 가격: {coupon.price}</h3>
          <h3 className="total">
            결제할 금액: {remainingAmount}
          </h3>
          <h3 className="remaining">
            잔여 쿠폰 금액: {coupon.price > totalPrice ? coupon.price - totalPrice : 0}
          </h3>
        </div>
      ) : (
        <h2 className="invalid-coupon">유효한 쿠폰 번호를 입력해주세요.</h2>
      )}
      
      <div className="coupon-buttons">
        <button className="coupon-use-button" onClick={useCoupon}>사용</button>
        <button className="coupon-back-button" onClick={back}>돌아가기</button>
      </div>
    </div>
  );
};
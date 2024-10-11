import { useEffect, useState } from "react";
import { detailCoupon } from "../../server/api";
import { useNavigate } from "react-router-dom";
import { usePriceStore } from "../../store/store";
import "./Coupon.css";

export const Coupon = () => {
  const [coupon, setCoupon] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const { ftotalPrice, setTotalPrice } = usePriceStore();
  const [remainingAmount, setRemainingAmount] = useState(ftotalPrice);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoupon = async () => {
      if (couponCode.trim()) {
        try {
          const fetchedCoupon = await detailCoupon(couponCode.trim());
          setCoupon(fetchedCoupon);

          if (fetchedCoupon) {
            // 쿠폰 가격을 적용한 후 남은 금액 계산
            const remaining = ftotalPrice - fetchedCoupon.price;
            setRemainingAmount(remaining >= 0 ? remaining : 0);
          } else {
            // 쿠폰이 유효하지 않은 경우 리셋
            setCoupon(null);
            setRemainingAmount(ftotalPrice);
          }
        } catch (error) {
          console.error('쿠폰 가져오는 중 오류 발생:', error);
          alert("쿠폰을 가져오는 중 오류가 발생했습니다.");
          // 오류 발생 시 총 가격으로 리셋
          setRemainingAmount(ftotalPrice);
        }
      } else {
        // 쿠폰 코드가 비어있는 경우 리셋
        setCoupon(null);
        setRemainingAmount(ftotalPrice);
      }
    };

    fetchCoupon();
  }, [couponCode, ftotalPrice]);

  const handleInputChange = (e) => {
    setCouponCode(e.target.value);
  };

  const useCoupon = () => {
    if (coupon) {
      setTotalPrice(remainingAmount); // 총 가격 업데이트
      alert(`쿠폰이 적용되었습니다! 남은 결제 금액: ${remainingAmount}`);
      navigate("/result");
    } else {
      alert("유효한 쿠폰을 입력해주세요.");
    }
  };

  const back = () => {
    navigate("/purchase");
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
            잔여 쿠폰 금액: {coupon.price > ftotalPrice ? coupon.price - ftotalPrice : 0}
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
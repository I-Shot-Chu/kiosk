import { useEffect, useState } from "react";
import { detailCoupon } from "../../server/api";
import { useNavigate } from "react-router-dom";
import { usePriceStore } from "../../store/store";
import "./Coupon.css";

export const Coupon = () => {
  const [coupon, setCoupon] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const { finaltotalPrice, setTotalPrice } = usePriceStore();
  const [remainingAmount, setRemainingAmount] = useState(finaltotalPrice);
  const [couponApplied, setCouponApplied] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setRemainingAmount(finaltotalPrice);
  }, [finaltotalPrice]);

  const fetchCoupon = async () => {
    if (couponCode.trim()) {
      try {
        const fetchedCoupon = await detailCoupon(couponCode.trim());
        setCoupon(fetchedCoupon);

        if (fetchedCoupon) {
          const remaining = finaltotalPrice - fetchedCoupon.price;
          setRemainingAmount(remaining >= 0 ? remaining : 0);
          setCouponApplied(false);
        } else {
          setCoupon(null);
          setRemainingAmount(finaltotalPrice);
        }
      } catch (error) {
        console.error('쿠폰 가져오는 중 오류 발생:', error);
        alert("쿠폰을 가져오는 중 오류가 발생했습니다.");
        setRemainingAmount(finaltotalPrice);
      }
    } else {
      setCoupon(null);
      setRemainingAmount(finaltotalPrice);
    }
  };

  useEffect(() => {
    fetchCoupon();
  }, [couponCode]);

  const handleInputChange = (e) => {
    setCouponCode(e.target.value);
  };

  const applyCoupon = () => {
    if (coupon) {
      setTotalPrice(remainingAmount);
      setCouponApplied(true);
      alert(`쿠폰이 적용되었습니다! 결제할 금액: ${remainingAmount}`);
      navigate("/card")
    } else {
      alert("유효한 쿠폰을 입력해주세요.");
    }
  };

  const back = () => {
    navigate("/menu/newdrinks");
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
            잔여 쿠폰 금액: {coupon.price > finaltotalPrice ? coupon.price - finaltotalPrice : 0}
          </h3>
        </div>
      ) : (
        <h2 className="invalid-coupon">유효한 쿠폰 번호를 입력해주세요.</h2>
      )}
      
      <div className="coupon-buttons">
        <button className="coupon-use-button" onClick={applyCoupon}>쿠폰 사용</button>
        <button className="coupon-back-button" onClick={back}>돌아가기</button>
      </div>
    </div>
  );
};
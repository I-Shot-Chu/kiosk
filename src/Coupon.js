import { useEffect, useState } from "react";
import { detailCoupon } from "./api/api";
import { useNavigate } from "react-router-dom";


export const Coupon = () => {
  const [coupon, setCoupon] = useState(""); // 초기값을 null로 설정
  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    if (couponCode) { // 쿠폰 코드가 입력되었을 때만 API 호출
      const fetchedCoupon = detailCoupon(couponCode); // detailCoupon에서 반환된 값을 받아옴
      setCoupon(fetchedCoupon);
    }
  }, [couponCode]);

  const nevigate = useNavigate();

  const handler = (e) => {
    setCouponCode(e.target.value);
  };

  const useCoupon = ()=>{
    nevigate("/result");
  }
   
  
  const back = ()=>{
    nevigate("/purchase");
   }

  return (
    <>
      <h2>쿠폰 번호: <input placeholder="번호 입력" value={couponCode} onChange={handler} /></h2>
      
      {coupon ? (
        <>
          <h3>쿠폰 명칭: {coupon.couponCode}</h3>
          <h3>쿠폰 명칭: {coupon.name}</h3>
          <h3>가격: \2000</h3>
          <h3>잔여 쿠폰금액: \{(coupon.price-2000)>0?coupon.price-2000:0}</h3>
          <h3>결제 금액: \{(2000-coupon.price)>0?2000-coupon.price:0}</h3>


        </>
      ) : (
        <h2>유효한 쿠폰 번호를 입력해주세요.</h2>
      )}
      <br/>
       <button onClick={useCoupon}>사용</button>
      <button onClick={back}>돌아가기</button> 

    </>
  );
};
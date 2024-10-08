import { useEffect, useState } from "react";
import { detailCupon } from "./api/api";
import { useNavigate } from "react-router-dom";


export const Cupon = () => {
  const [cupon, setCupon] = useState(""); // 초기값을 null로 설정
  const [cuponCode, setCuponCode] = useState("");

  useEffect(() => {
    if (cuponCode) { // 쿠폰 코드가 입력되었을 때만 API 호출
      const fetchedCupon = detailCupon(cuponCode); // detailCupon에서 반환된 값을 받아옴
      setCupon(fetchedCupon);
    }
  }, [cuponCode]);

  const nevigate = useNavigate();

  const handler = (e) => {
    setCuponCode(e.target.value);
  };

  const useCupon = ()=>{
    nevigate("/result");
   }
   
  
  const back = ()=>{
    nevigate("/purchase");
   }

  return (
    <>
      <h2>쿠폰 번호: <input placeholder="번호 입력" value={cuponCode} onChange={handler} /></h2>
      
      {cupon ? (
        <>
          <h3>쿠폰 명칭: {cupon.cuponCode}</h3>
          <h3>쿠폰 명칭: {cupon.name}</h3>
          <h3>가격: \2000</h3>
          <h3>잔여 쿠폰금액: \{(cupon.price-2000)>0?cupon.price-2000:0}</h3>
          <h3>결제 금액: \{(2000-cupon.price)>0?2000-cupon.price:0}</h3>


        </>
      ) : (
        <h2>유효한 쿠폰 번호를 입력해주세요.</h2>
      )}
      <br/>
       <button onClick={useCupon}>사용</button>
      <button onClick={back}>돌아가기</button> 

    </>
  );
};
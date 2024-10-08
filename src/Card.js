import React from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate 훅 임포트
import videoFile from './card2.mp4'; // 이동된 경로

//https://iconscout.com/lottie-animations/insert-card 여기서 가져옴
export const Card = () => {
  const navigate = useNavigate();  // useNavigate 훅 사용

  const back = () => {
    navigate("/menu");  // "/menu" 페이지로 이동
  };

  const ok = () => {
    navigate("/result");  // "/result" 페이지로 이동
  };

  return (
    <div>
      <h2>카드 결제(간편결제)</h2>
      <br />
      <h2>
        다음 그림과 같이 신용/체크카드를 넣어주세요
        (삼성/LG페이는 핸드폰을 카드리더기에 터치해주세요.)
      </h2>
      <video
        width="300"
        height="400"
        autoPlay
        loop
        muted
        playsInline  // 모바일에서도 자동 재생 가능하게 설정
        style={{ objectFit: 'cover' }}  // 크기에 맞춰 동영상 맞춤
      >
        <source src={videoFile} type="video/mp4" />
        브라우저가 동영상을 지원하지 않습니다.
      </video>
      <br />
      <button
        style={{ color: 'white', backgroundColor: 'brown', width: 150, height: 50 }}
        onClick={back}
      >
        취소
      </button>
      <button
        style={{ color: 'white', backgroundColor: 'red', width: 300, height: 50 }}
        onClick={ok}
      >
        승인 요청
      </button>
    </div>
  );
};
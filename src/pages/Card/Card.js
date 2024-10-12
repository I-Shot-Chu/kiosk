import React from 'react';
import { useNavigate } from 'react-router-dom';
import videoFile from '../../assets/images/card/card2.mp4';
import './Card.css'; // 추가된 CSS 파일

export const Card = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate("/payment");
  };

  const ok = () => {
    navigate("/result");
  };

  return (
    <div className="card-container">
      <h2 className="card-title">카드 결제(간편결제)</h2>
      <h3 className="card-instructions">
        다음 그림과 같이 신용/체크카드를 넣어주세요
        <br />
        (삼성/LG페이는 핸드폰을 카드리더기에 터치해주세요.)
      </h3>
      <video
        width="300"
        height="400"
        autoPlay
        loop
        muted
        playsInline
        className="card-video"
      >
        <source src={videoFile} type="video/mp4" />
        브라우저가 동영상을 지원하지 않습니다.
      </video>
      <div className="card-buttons">
      <button className="approve-button" onClick={ok}>
          승인 요청
        </button>
        <button className="cancel-button" onClick={back}>
          취소
        </button>
      
      </div>
    </div>
  );
};
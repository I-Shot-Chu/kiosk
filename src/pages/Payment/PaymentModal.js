import React from 'react';
import './PaymentModal.css';

const Modal = ({ isVisible, onClose, title, children }) => {
    if (!isVisible) return null; // 모달이 보이지 않으면 아무것도 렌더링하지 않음

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <div>{children}</div>
        {/* <button className='close-button' onClick={onClose}>닫기</button> */}
      </div>
    </div>
  );
};

export default Modal;

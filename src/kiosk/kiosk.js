// Kiosk.js
import React from 'react';
import './kiosk.css';


const Kiosk = ({ children }) => {
    return (
        <div className="kiosk-container">
            {/* <div className="kiosk-header">
                <h1 className="kiosk-title">i-shot-chu</h1>
            </div> */}
            <div className="kiosk-screen">
                {children} {/* 여기에 라우터로부터 전달받은 콘텐츠가 표시됩니다. */}
            </div>
        </div>
    );
};

export default Kiosk;
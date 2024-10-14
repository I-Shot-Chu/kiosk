import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { language, useCartStore } from "../store/store";
import './Timer.css'

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

   useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
        }
    }, [delay]);
}

    const Timer = ({ timeLeft, resetTime }) =>
    {
    const navigate = useNavigate();

    const { lang } = language();

    const { clearCart } = useCartStore();

    const message = () =>
    {
        if(lang){
        alert("제한 시간이 지나 초기 화면으로 돌아갑니다.");
        }

        if(!lang){
        alert("Request timeout.");
        }
    } 

   useInterval(() => {
        if (timeLeft > 0) {
        resetTime(timeLeft - 1);
        } else {
        message();
        clearCart();
        navigate("/idle");
        }
   }, 1000);

   return (
    <div className="timer_container">
       <h3 className="timer">{lang ? "남은 시간" : null}</h3>
       <h2 className="sec">{timeLeft} {lang ? "초" : "second(s) left."}</h2>
    </div>
    );
};

 export default Timer;

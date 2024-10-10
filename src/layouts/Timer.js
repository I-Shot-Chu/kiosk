import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

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

const Timer = ({ timeLeft, resetTime }) => {
  const navigate = useNavigate();

  useInterval(() => {
    if (timeLeft > 0) {
      resetTime(timeLeft - 1);
    } else {
      alert("제한 시간이 지나 초기 화면으로 돌아갑니다.");
      navigate("/idle");
    }
  }, 1000);

  return (
    <>
      <h3>남은 시간</h3>
      <h2>{timeLeft} 초</h2>
      <br></br>
    </>
  );
};

export default Timer;

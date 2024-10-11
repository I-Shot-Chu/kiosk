import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { language } from "../store/store";

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

  const message = () =>
  {
    if(lang)
    {
      alert("제한 시간이 지나 초기 화면으로 돌아갑니다.");
    }

    if(!lang)
    {
      alert("Request timeout.");
    }
  } 

  useInterval(() => {
    if (timeLeft > 0) {
      resetTime(timeLeft - 1);
    } else {
      message();
      navigate("/idle");
    }
  }, 1000);

  return (
    <>
      <h3>{lang ? "남은 시간" : null}</h3>
      <h2>{timeLeft} {lang ? "초" : "second(s) left."}</h2>
      <br></br>
    </>
  );
};

export default Timer;
